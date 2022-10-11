import { Response } from 'express';
import { Request } from 'express';
import { DeleteUserUseCases } from './DeleteUserUseCases';
import { Controller } from './../../../abstracts/Controller';
export class DeleteUserController extends Controller {

  constructor(
    private deleteUserUseCases: DeleteUserUseCases,
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteUserUseCases.execute(id);

    return res.sendStatus(204);
  }

}