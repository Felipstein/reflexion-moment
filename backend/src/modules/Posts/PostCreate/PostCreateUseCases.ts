import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { UseCasesError } from './../../../errors/UseCasesError';
import { Post } from './../../../entities/Post';
import { IPostsRepository } from './../../../repositories/IPostsRepository';
import { PostCreateDTO } from './PostCreateDTO';
export class PostCreateUseCases {

  constructor(
    private usersRepository: IUsersRepository,
    private postsRepository: IPostsRepository,
  ) { }

  async execute({ title, content, isShareable, userId }: PostCreateDTO): Promise<Post> {
    if (!title) {
      throw new UseCasesError(400, 'Título é obrigatório.');
    }
    if (!content) {
      throw new UseCasesError(400, 'Conteúdo é obrigatório.');
    }
    if (!userId) {
      throw new UseCasesError(400, 'Usuário é obrigatório.');
    }

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw new UseCasesError(404, 'Usuário não encontrado.');
    }

    const post = new Post({ title, content, isShareable, userId });

    const postStored = await this.postsRepository.save(post);

    return postStored;
  }

}