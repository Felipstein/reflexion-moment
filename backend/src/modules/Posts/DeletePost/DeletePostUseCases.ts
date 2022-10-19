import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { UseCasesError } from './../../../errors/UseCasesError';
import { Post } from './../../../entities/Post';
import { IPostsRepository } from './../../../repositories/IPostsRepository';

export class DeletePostUseCases {

  constructor(
    private usersRepository: IUsersRepository,
    private postsRepository: IPostsRepository,
  ) { }

  async execute(id: string): Promise<void> {
    if (!id) {
      return;
    }

    try {
      await this.postsRepository.delete(id);
    } catch { }
  }

}