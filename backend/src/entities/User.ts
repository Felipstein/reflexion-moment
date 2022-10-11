import { uuidProvider } from "../providers/UUIDProvider";

export class User {

  readonly id: string;

  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor({ name, email, password }: Omit<User, 'id'>, id?: string) {
    this.id = id || uuidProvider.uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }

}