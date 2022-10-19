import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { UseCasesError } from './../../../errors/UseCasesError';
import { Post } from './../../../entities/Post';
import { IPostsRepository } from './../../../repositories/IPostsRepository';
import { UpdatePostDTO } from './UpdatePostDTO';
export class UpdatePostUseCases {

  constructor(
    private usersRepository: IUsersRepository,
    private postsRepository: IPostsRepository,
  ) { }

  async execute({ id, title, content, isShareable, likes }: UpdatePostDTO): Promise<Post> {
    if (!id) {
      throw new UseCasesError(404, 'Post não encontrado.');
    }
    if (!title) {
      throw new UseCasesError(400, 'Título é obrigatório.');
    }
    if (!content) {
      throw new UseCasesError(400, 'Conteúdo é obrigatório.');
    }

    const postExists = await this.postsRepository.findById(id);
    if (!postExists) {
      throw new UseCasesError(404, 'Post não encontrado.');
    }



    const post = new Post({
      title, content, isShareable: isShareable ?? postExists.isShareable, likes: likes ?? postExists.likes, userId: postExists.userId
    }, id);

    const postUpdated = await this.postsRepository.update(post);

    return postUpdated;
  }

}