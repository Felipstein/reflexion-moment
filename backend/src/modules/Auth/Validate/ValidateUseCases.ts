import { UseCasesError } from './../../../errors/UseCasesError';
import { ValidateDTO } from './ValideteDTO';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { SuccessAuthenticateDTO } from '../SuccessAuthenticateDTO';
import { tokenProvider } from '../../../providers/TokenProvider';
export class ValidateUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ token }: ValidateDTO): Promise<SuccessAuthenticateDTO> {
    if (!token) {
      throw new UseCasesError(401, 'Token inválido.');
    }

    const validToken = tokenProvider.verify(token);
    if (!validToken) {
      throw new UseCasesError(401, 'Token inválido.');
    }

    const data = tokenProvider.decode(token);
    if (!data?.userId) {
      throw new UseCasesError(401, 'Token inválido.');
    }

    const { userId } = data;

    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new UseCasesError(401, 'Token inválido.');
    }

    return { user, token };
  }

}