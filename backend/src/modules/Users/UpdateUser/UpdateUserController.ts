import { UseCasesError } from './../../../errors/UseCasesError';
import { UpdateUserUseCases } from './UpdateUserUseCases';
import { Response } from 'express';
import { Request } from 'express';
import { IController } from './../../../interfaces/IController';
export class UpdateUserController implements IController {

  constructor(
    private updateUserUseCases: UpdateUserUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const user = await this.updateUserUseCases.execute({ id, name, email, password });

      return res.json(user);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }

  }

}