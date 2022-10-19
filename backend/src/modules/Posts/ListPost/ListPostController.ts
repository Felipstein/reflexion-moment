import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { ListPostUseCases } from './ListPostUseCases';
import { IController } from './../../../interfaces/IController';

export class ListPostController implements IController {

  constructor(
    private listPostUseCases: ListPostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const post = await this.listPostUseCases.execute(id);

      return res.json(post);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }

  }

}