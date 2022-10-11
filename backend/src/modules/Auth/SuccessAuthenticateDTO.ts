import { User } from './../../entities/User';

export interface SuccessAuthenticateDTO {
  user: User,
  token: string,
}