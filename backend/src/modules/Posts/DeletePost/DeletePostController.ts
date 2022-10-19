import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { DeletePostUseCases } from './DeletePostUseCases';
import { IController } from './../../../interfaces/IController';

export class DeletePostController implements IController {

  constructor(
    private deletePostUseCases: DeletePostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const post = await this.deletePostUseCases.execute(id);

      return res.sendStatus(204);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido' });
    }
  }

}