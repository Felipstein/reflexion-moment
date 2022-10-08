import { currentUsersRepository } from '../../../repositories';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCases } from './CreateUserUseCases';

const createUserUseCases = new CreateUserUseCases(currentUsersRepository);
const createUserController = new CreateUserController(createUserUseCases);

export { createUserUseCases, createUserController };