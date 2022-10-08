import { prisma } from '../../database/PrismaClient';
import { User } from '../../entities/User';
import { IUsersRepository } from './../IUsersRepository';
export class PrismaUsersRepository implements IUsersRepository {

  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async findById(id: string): Promise<User | undefined | null> {
    return await prisma.user.findFirst({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | undefined | null> {
    return await prisma.user.findFirst({ where: { email } });
  }

  async save({ id, name, email, password }: User): Promise<User> {
    return await prisma.user.create({
      data: {
        id, name, email, password,
      }
    });
  }

  async update({ id, name, email, password }: User): Promise<User | undefined | null> {
    return await prisma.user.update({
      where: { id },
      data: {
        name, email, password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

}