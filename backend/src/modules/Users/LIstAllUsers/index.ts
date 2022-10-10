import { currentUsersRepository } from '../../../repositories';
import { ListAllUsersController } from './ListAllUsersController';
import { ListAllUsersUseCases } from './ListAllUsersUseCases';

const listAllUsersUseCases = new ListAllUsersUseCases(currentUsersRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersUseCases);

export { listAllUsersUseCases, listAllUsersController };