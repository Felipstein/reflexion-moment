import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { PostCreateUseCases } from './PostCreateUseCases';
import { IController } from './../../../interfaces/IController';

export class PostCreateController implements IController {

  constructor(
    private postCreateUseCases: PostCreateUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, isShareable, userId } = req.body;

    try {
      const post = await this.postCreateUseCases.execute({ title, content, isShareable, userId });

      return res.status(201).json(post);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido' });
    }
  }

}