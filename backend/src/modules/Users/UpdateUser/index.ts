import { currentUsersRepository } from '../../../repositories';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCases } from './UpdateUserUseCases';

const updateUserUseCases = new UpdateUserUseCases(currentUsersRepository);
const updateUserController = new UpdateUserController(updateUserUseCases);

export { updateUserUseCases, updateUserController };