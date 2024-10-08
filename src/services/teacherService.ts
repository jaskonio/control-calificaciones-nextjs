import prisma from '../prisma/client';
import { TeacherStatus } from '@prisma/client';

interface CreateTeacherInput {
  userId: number;
  expertise: string;
  phone: string;
  address: string;
  hireDate: Date;
  status: TeacherStatus;
}

interface UpdateTeacherInput {
  id: number;
  data: Partial<CreateTeacherInput>;
}

export class TeacherService {
  async create(data: CreateTeacherInput) {
    return await prisma.teacher.create({
      data,
    });
  }

  async getAll() {
    return await prisma.teacher.findMany({
      include: {
        user: true,
        classes: true,
      },
    });
  }

  async getById(id: number) {
    return await prisma.teacher.findUnique({
      where: { id },
      include: {
        user: true,
        classes: true,
      },
    });
  }

  async update({ id, data }: UpdateTeacherInput) {
    return await prisma.teacher.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.teacher.delete({
      where: { id },
    });
  }
}