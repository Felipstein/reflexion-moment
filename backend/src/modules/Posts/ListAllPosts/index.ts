import { ListAllPostsController } from './ListAllPostsController';
import { ListAllPostsUseCases } from './ListAllPostsUseCases';
import { currentPostsRepository } from "../../../repositories";

const postsRepository = currentPostsRepository;
const listAllPostsUseCases = new ListAllPostsUseCases(postsRepository);
const listAllPostsController = new ListAllPostsController(listAllPostsUseCases);

export { listAllPostsUseCases, listAllPostsController };