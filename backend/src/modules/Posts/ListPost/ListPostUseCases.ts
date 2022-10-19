import { UseCasesError } from './../../../errors/UseCasesError';
import { Post } from '../../../entities/Post';
import { IPostsRepository } from './../../../repositories/IPostsRepository';
import { uuidProvider } from '../../../providers/UUIDProvider';
export class ListPostUseCases {

  constructor(
    private postsRepository: IPostsRepository,
  ) { }

  async execute(id: string): Promise<Post> {
    if (!id) {
      throw new UseCasesError(404, 'Post não encontrado.');
    }

    if (!uuidProvider.isUuid(id)) {
      throw new UseCasesError(404, 'Post não encontrado.');
    }

    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new UseCasesError(404, 'Post não encontrado.');
    }

    return post;
  }

}