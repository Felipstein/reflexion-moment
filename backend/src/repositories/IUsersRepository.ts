import { User } from './../entities/User';

export interface IUsersRepository {

  findAll(): Promise<User[]>;

  findById(id: string): Promise<User | undefined | null>;

  findByEmail(email: string): Promise<User | undefined | null>;

  save(user: User): Promise<User>;

  update(user: User): Promise<User>;

  delete(id: string): Promise<void>;

}