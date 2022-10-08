import { User } from './../entities/User';
import { hash, compare } from "bcrypt";

class CryptProvider {

  async hashPassword(password: string) {
    return await hash(password, 8);
  }

  async matchPassword(user: User, password: string) {
    return await compare(password, user.password);
  }

}

const cryptProvider = new CryptProvider();

export { cryptProvider }