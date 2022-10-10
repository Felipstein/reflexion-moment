import { currentUsersRepository } from '../../../repositories';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCases } from './DeleteUserUseCases';

const deleteUserUseCases = new DeleteUserUseCases(currentUsersRepository);
const deleteUsersController = new DeleteUserController(deleteUserUseCases);

export { deleteUserUseCases, deleteUsersController };