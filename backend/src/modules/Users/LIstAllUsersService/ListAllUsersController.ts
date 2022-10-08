import { Request, Response } from 'express';

import { IController } from './../../../interfaces/IController';
import { ListAllUsersUseCase } from './ListAllUsersUseCase';

export class ListAllUsersController implements IController {

  constructor(
    private listAllUsersUseCase: ListAllUsersUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const users = await this.listAllUsersUseCase.execute();

    return res.json(users);
  }

}