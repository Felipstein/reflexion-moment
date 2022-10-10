import { UseCasesError } from './../../../errors/UseCasesError';
import { User } from '../../../entities/User';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { uuidProvider } from '../../../providers/UUIDProvider';
export class ListUserUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(id: string): Promise<User | undefined> {
    if (!uuidProvider.isUuid(id)) {
      throw new UseCasesError(404, 'Usuário não encontrado.');
    }

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UseCasesError(404, 'Usuário não encontrado.');
    }

    return user;
  }

}