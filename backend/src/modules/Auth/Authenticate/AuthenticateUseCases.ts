import { UseCasesError } from './../../../errors/UseCasesError';
import { AuthenticateDTO } from './AuthenticateDTO';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { SuccessAuthenticateDTO } from './SuccessAuthenticateDTO';
export class AuthenticateUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ email, password }: AuthenticateDTO): Promise<SuccessAuthenticateDTO> {
    if(!email) {
      throw new UseCasesError(400, 'E-mail é obrigatório.');
    }

    if(!password) {
      throw new UseCasesError(400, 'Senha é obrigatória.');
    }

    if(password.length < 3) {
      throw new UseCasesError(400, 'Senha não pode ter menos de três caracteres.');
    }

    const user = await this.usersRepository.findByEmail(email);
    if(!user) {
      throw new UseCasesError(400, 'Nenhum usuário encontrado com esse e-amil.');
    }


  }

}