import { UseCasesError } from './../../../errors/UseCasesError';
import { Response } from 'express';
import { Request } from 'express';
import { IController } from './../../../interfaces/IController';
import { CreateUserUseCases } from './CreateUserUseCases';
export class CreateUserController implements IController {

  constructor(
    private createUserUseCases: CreateUserUseCases,
  ) { };

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      const user = await this.createUserUseCases.execute({ name, email, password });

      return res.status(201).json(user);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }
  }

}