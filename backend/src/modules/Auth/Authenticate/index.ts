import { AuthenticateController } from './AuthenticateController';
import { currentUsersRepository } from '../../../repositories';
import { AuthenticateUseCases } from './AuthenticateUseCases';

const usersRepository = currentUsersRepository;

const authenticateUseCases = new AuthenticateUseCases(usersRepository);
const authenticateController = new AuthenticateController(authenticateUseCases);

export { authenticateUseCases, authenticateController };