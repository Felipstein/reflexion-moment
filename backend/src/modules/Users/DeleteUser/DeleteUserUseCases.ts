import { IUsersRepository } from './../../../repositories/IUsersRepository';
export class DeleteUserUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute(id: string): Promise<void> {

    if (!id) {
      return;
    }

    try {
      await this.usersRepository.delete(id);
    } catch { }
  }

}