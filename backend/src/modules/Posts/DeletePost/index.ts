import { DeletePostController } from './DeletePostController';
import { DeletePostUseCases } from './DeletePostUseCases';
import { currentPostsRepository, currentUsersRepository } from "../../../repositories";

const usersRepository = currentUsersRepository;
const postsRepository = currentPostsRepository;

const deletePostUseCases = new DeletePostUseCases(usersRepository, postsRepository);
const deletePostController = new DeletePostController(deletePostUseCases);

export { deletePostUseCases, deletePostController };