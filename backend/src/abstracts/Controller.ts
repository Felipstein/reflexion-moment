import { UseCasesError } from './../errors/UseCasesError';
import { Request, Response } from "express";

export abstract class Controller {

  abstract handle(req: Request, res: Response): Promise<Response>;

  async safeHandle(req: Request, res: Response): Promise<Response> {
    try {
      return this.handle(req, res);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).json({ message: err.message || 'Erro desconhecido.' });
    }
  }

}