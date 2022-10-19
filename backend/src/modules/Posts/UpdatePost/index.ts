import { UpdatePostController } from './UpdatePostController';
import { UpdatePostUseCases } from './UpdatePostUseCases';
import { currentPostsRepository, currentUsersRepository } from "../../../repositories";

const usersRepository = currentUsersRepository;
const postsRepository = currentPostsRepository;

const updatePostUseCases = new UpdatePostUseCases(usersRepository, postsRepository);
const updatePostController = new UpdatePostController(updatePostUseCases);

export { updatePostUseCases, updatePostController };