import { currentUsersRepository } from '../../../repositories';
import { ListUserController } from './ListUserController';
import { ListUserUseCases } from './ListUserUseCases';

const listUserUseCases = new ListUserUseCases(currentUsersRepository);
const listUserController = new ListUserController(listUserUseCases);

export { listUserUseCases, listUserController };