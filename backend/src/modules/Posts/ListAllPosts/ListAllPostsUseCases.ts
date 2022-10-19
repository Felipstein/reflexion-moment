import { Post } from '../../../entities/Post';
import { IPostsRepository } from './../../../repositories/IPostsRepository';
export class ListAllPostsUseCases {

  constructor(
    private postsRepository: IPostsRepository,
  ) { }

  async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.findAll();

    return posts;
  }

}