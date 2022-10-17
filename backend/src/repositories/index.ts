import { InMemoryUsersRepository } from './implementations/InMemoryUsersRepository';
import { PrismaPostsRepository } from './implementations/PrismaPostsRepository';
import { PrismaUsersRepository } from './implementations/PrismaUsersRepository';

const currentUsersRepository = new PrismaUsersRepository();
const testUsersRepository = new InMemoryUsersRepository();

const currentPostsRepository = new PrismaPostsRepository();

export { currentUsersRepository, testUsersRepository, currentPostsRepository };