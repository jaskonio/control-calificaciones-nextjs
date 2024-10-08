import prisma from '../prisma/client';
import { UserRole, UserStatus } from '@prisma/client';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
}

interface UpdateUserInput {
  id: number;
  data: Partial<CreateUserInput>;
}

export class UserService {
  async create(data: CreateUserInput) {
    return await prisma.user.create({
      data,
    });
  }

  async getAll() {
    return await prisma.user.findMany();
  }

  async getById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async update({ id, data }: UpdateUserInput) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
