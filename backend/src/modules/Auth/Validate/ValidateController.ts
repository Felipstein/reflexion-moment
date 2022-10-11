import { UseCasesError } from './../../../errors/UseCasesError';
import { ValidateUseCases } from './ValidateUseCases';
import { IController } from './../../../interfaces/IController';
import { Request, Response } from 'express';

export class ValidateController implements IController {

  constructor(
    private validateUseCases: ValidateUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { token } = req.body;

    try {
      const data = await this.validateUseCases.execute({ token });

      return res.json(data);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }
  }

}