import { Request, Response } from 'express';

import { Controller } from './../../../abstracts/Controller';
import { ListAllUsersUseCases } from './ListAllUsersUseCases';

export class ListAllUsersController extends Controller {

  constructor(
    private listAllUsersUseCase: ListAllUsersUseCases,
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const users = await this.listAllUsersUseCase.execute();

    return res.json(users);
  }

}