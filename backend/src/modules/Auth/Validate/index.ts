import { currentUsersRepository } from '../../../repositories';
import { ValidateController } from './ValidateController';
import { ValidateUseCases } from './ValidateUseCases';

const validateUseCases = new ValidateUseCases(currentUsersRepository);
const validateControlller = new ValidateController(validateUseCases);

export { validateUseCases, validateControlller };