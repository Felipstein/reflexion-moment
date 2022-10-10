import { UseCasesError } from './../../../errors/UseCasesError';
import { Response, Request } from 'express';
import { Controller } from './../../../abstracts/Controller';
import { AuthenticateUseCases } from './AuthenticateUseCases';

export class AuthenticateController extends Controller {

  constructor(
    private authenticateUseCases: AuthenticateUseCases,
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const SuccessAuthenticateDTO = await this.authenticateUseCases.execute({ email, password });

      return res.send(SuccessAuthenticateDTO);
    } catch (err: UseCasesError | any) {
      return res.status(err.statusCode || 500).send({ message: err.message || 'Erro desconhecido.' });
    }
  }

}