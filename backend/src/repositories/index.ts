import { InMemoryUsersRepository } from './implementations/InMemoryUsersRepository';
import { PrismaUsersRepository } from './implementations/PrismaUsersRepository';

const currentUsersRepository = new PrismaUsersRepository();
const testUsersRepository = new InMemoryUsersRepository();

export { currentUsersRepository, testUsersRepository };