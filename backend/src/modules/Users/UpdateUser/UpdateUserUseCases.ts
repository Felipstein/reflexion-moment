import { UseCasesError } from './../../../errors/UseCasesError';
import { UpdateUserDTO } from './UpdateUserDTO';
import { User } from '../../../entities/User';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
export class UpdateUserUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ id, name, email, password }: UpdateUserDTO): Promise<User> {
    if (!id) {
      throw new UseCasesError(400, 'ID é obrigatório.');
    }
    if (!name) {
      throw new UseCasesError(400, 'Nome é obrigatório.');
    }
    if (!email) {
      throw new UseCasesError(400, 'E-mail é obrigatório.');
    }
    if (!password) {
      throw new UseCasesError(400, 'Senha é obrigatória.');
    }

    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new UseCasesError(404, 'Usuário não encontrado.');
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExists && emailAlreadyExists.id !== id) {
      throw new UseCasesError(400, 'E-mail já cadastrado.');
    }

    const user = new User({ name, email, password }, id);

    const userUpdated = await this.usersRepository.update(user);

    return userUpdated;
  }

}