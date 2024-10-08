// src/services/parentService.ts
import prisma from '../prisma/client';
import { Prisma } from '@prisma/client';

interface CreateParentInput {
  userId: number;
  address: string;
  phone: string;
  email: string;
  studentId: number;
}

interface UpdateParentInput {
  data: Partial<CreateParentInput>;
}

export class ParentService {
  async add(data: CreateParentInput) {
    return await prisma.parent.create({ data });
  }

  async getAll() {
    return await prisma.parent.findMany({
      include: {
        user: true,
        student: true,
      },
    });
  }

  async getById(id: number) {
    return await prisma.parent.findUnique({
      where: { id },
      include: {
        user: true,
        student: true,
      },
    });
  }

  async update(id: number, data: UpdateParentInput['data']) {
    return await prisma.parent.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.parent.delete({
      where: { id },
    });
  }
}