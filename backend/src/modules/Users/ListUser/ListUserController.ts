import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { IController } from './../../../interfaces/IController';
import { ListUserUseCases } from "./ListUserUseCases";

export class ListUserController implements IController {

  constructor(
    private listUserUseCases: ListUserUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.listUserUseCases.execute(id);

      return res.json(user);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido' });
    }
  }

}