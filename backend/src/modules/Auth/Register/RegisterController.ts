import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { RegisterUseCases } from './RegisterUseCases';
import { IController } from './../../../interfaces/IController';
export class RegisterController implements IController {

  constructor(
    private registerUseCases: RegisterUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, confirmPassword } = req.body;

    try {
      const SuccessAuthenticateDTO = await this.registerUseCases.execute({ name, email, password, confirmPassword });

      return res.status(201).json(SuccessAuthenticateDTO);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }
  }

}