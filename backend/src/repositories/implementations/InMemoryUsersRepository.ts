import { User } from '../../entities/User';
import { IUsersRepository } from './../IUsersRepository';

export class InMemoryUsersRepository implements IUsersRepository {

  private users: User[] = [];

  findAll(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  findById(id: string): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find(userObj => userObj.id === id);

      resolve(user);
    });
  }

  findByEmail(email: string): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find(userObj => userObj.email === email);

      resolve(user);
    });
  }

  save(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const emailAlreadyExists = this.users.find(userObj => userObj.email === user.email);
      if (emailAlreadyExists) {
        reject(new Error('Database/Error: duplicate e-mail key'));
      }

      this.users.push(user);

      resolve(user);
    });
  }

  update(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const emailAlreadyExists = this.users.find(userObj => userObj.email === user.email && userObj.id !== user.id);
      if (emailAlreadyExists) {
        reject(new Error('Database/Error: duplicate e-mail key'));
      }

      this.users = this.users.map(userObj => userObj.id === user.id ? user : userObj);

      resolve(user);
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve) => {
      this.users = this.users.filter(userObj => userObj.id !== id);

      resolve();
    });
  }

}