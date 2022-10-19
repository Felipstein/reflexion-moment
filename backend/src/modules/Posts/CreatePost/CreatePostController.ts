import { UseCasesError } from './../../../errors/UseCasesError';
import { Request, Response } from 'express';
import { CreatePostUseCases } from './CreatePostUseCases';
import { IController } from './../../../interfaces/IController';

export class CreatePostController implements IController {

  constructor(
    private createPostUseCases: CreatePostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, isShareable, userId } = req.body;

    try {
      const post = await this.createPostUseCases.execute({ title, content, isShareable, userId });

      return res.status(201).json(post);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido' });
    }
  }

}