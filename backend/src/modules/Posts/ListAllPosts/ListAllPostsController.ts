import { UseCasesError } from './../../../errors/UseCasesError';
import { ListAllPostsUseCases } from './ListAllPostsUseCases';
import { Request, Response } from 'express';
import { IController } from './../../../interfaces/IController';

export class ListAllPostsController implements IController {

  constructor(
    private listAllPostsUseCases: ListAllPostsUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await this.listAllPostsUseCases.execute();

      return res.json(posts);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }
  }

}