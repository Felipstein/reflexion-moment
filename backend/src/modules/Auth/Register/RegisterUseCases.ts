import { User } from './../../../entities/User';
import { UseCasesError } from './../../../errors/UseCasesError';
import { SuccessAuthenticateDTO } from './../SuccessAuthenticateDTO';
import { RegisterDTO } from './RegisterDTO';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { cryptProvider } from '../../../providers/CryptProvider';
import { prisma } from '../../../database/PrismaClient';
import { tokenProvider } from '../../../providers/TokenProvider';
export class RegisterUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ name, email, password, confirmPassword }: RegisterDTO): Promise<SuccessAuthenticateDTO> {
    if (!name) {
      throw new UseCasesError(400, 'Nome é obrigatório.');
    }
    if (!email) {
      throw new UseCasesError(400, 'E-mail é obrigatório.');
    }
    if (!password) {
      throw new UseCasesError(400, 'Senha é obrigatória.');
    }
    if (!confirmPassword) {
      throw new UseCasesError(400, 'Confirmar senha é obrigatória.');
    }

    if (password.length < 3) {
      throw new UseCasesError(400, 'Senha não pode ter menos que três caracteres.');
    }

    if (password !== confirmPassword) {
      throw new UseCasesError(400, 'As senhas não coincidem.');
    }

    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new UseCasesError(400, 'E-mail já cadastrado.');
    }

    const encryptedPassword = await cryptProvider.hashPassword(password);

    const user = new User({ name, email, password: encryptedPassword });
    await this.usersRepository.save(user);

    const token = tokenProvider.sign({ userId: user.id }, { expiresIn: '7d' });

    return { user, token };
  }

}