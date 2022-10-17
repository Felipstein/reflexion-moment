import { PostCreateController } from './PostCreateController';
import { PostCreateUseCases } from './PostCreateUseCases';
import { currentPostsRepository, currentUsersRepository } from "../../../repositories";

const usersRepository = currentUsersRepository;
const postsRepository = currentPostsRepository;

const postCreateUseCases = new PostCreateUseCases(usersRepository, postsRepository);
const postCreateController = new PostCreateController(postCreateUseCases);

export { postCreateUseCases, postCreateController };