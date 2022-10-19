import { ListPostController } from './ListPostController';
import { ListPostUseCases } from './ListPostUseCases';
import { currentPostsRepository } from "../../../repositories";

const postsRepository = currentPostsRepository;
const listPostUseCases = new ListPostUseCases(postsRepository);
const listPostController = new ListPostController(listPostUseCases);

export { listPostUseCases, listPostController };