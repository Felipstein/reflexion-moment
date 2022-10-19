import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { UpdatePostUseCases } from './UpdatePostUseCases';
import { IController } from './../../../interfaces/IController';

export class UpdatePostController implements IController {

  constructor(
    private updatePostUseCases: UpdatePostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, content, isShareable, likes } = req.body;

    try {
      const post = await this.updatePostUseCases.execute({ id, title, content, isShareable, likes });

      return res.status(201).json(post);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido' });
    }
  }

}