import { User } from './../../../entities/User';
import { UseCasesError } from './../../../errors/UseCasesError';
import { CreateUserDTO } from './CreateUserDTO';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { cryptProvider } from '../../../providers/CryptProvider';

export class CreateUserUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {

    if (!name) {
      throw new UseCasesError(400, 'Nome é obrigatório.');
    }
    if (!email) {
      throw new UseCasesError(400, 'E-mail é obrigatório.');
    }
    if (!password) {
      throw new UseCasesError(400, 'Senha é obrigatória.');
    }

    if (password.length < 3) {
      throw new UseCasesError(400, 'Senha não pode ter menos que três caracteres.');
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new UseCasesError(400, 'E-mail já cadastrado.');
    }

    const encryptedPassword = await cryptProvider.hashPassword(password);

    const user = new User({ name, email, password: encryptedPassword });

    const userStored = await this.usersRepository.save(user);

    return userStored;
  }

}