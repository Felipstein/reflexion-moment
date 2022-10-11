import { Response } from 'express';
import { Request } from 'express';
import { DeleteUserUseCases } from './DeleteUserUseCases';
import { IController } from './../../../interfaces/IController';
export class DeleteUserController implements IController {

  constructor(
    private deleteUserUseCases: DeleteUserUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteUserUseCases.execute(id);

    return res.sendStatus(204);
  }

}