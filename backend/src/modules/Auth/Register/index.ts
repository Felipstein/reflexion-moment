import { RegisterController } from './RegisterController';
import { currentUsersRepository } from '../../../repositories';
import { RegisterUseCases } from './RegisterUseCases';

const registerUseCases = new RegisterUseCases(currentUsersRepository);
const registerController = new RegisterController(registerUseCases);

export { registerUseCases, registerController };