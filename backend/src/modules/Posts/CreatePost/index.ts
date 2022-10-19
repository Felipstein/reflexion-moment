import { CreatePostController } from './CreatePostController';
import { CreatePostUseCases } from './CreatePostUseCases';
import { currentPostsRepository, currentUsersRepository } from "../../../repositories";

const usersRepository = currentUsersRepository;
const postsRepository = currentPostsRepository;

const createPostUseCases = new CreatePostUseCases(usersRepository, postsRepository);
const createPostController = new CreatePostController(createPostUseCases);

export { createPostUseCases, createPostController };