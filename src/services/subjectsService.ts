// src/services/subjectService.ts
import prisma from '../prisma/client';
import { Prisma, SubjectStatus } from '@prisma/client';

interface CreateSubjectInput {
  name: string;
  description: string;
  gradeLevel: string;
  status: SubjectStatus;
}

interface UpdateSubjectInput {
  data: Partial<CreateSubjectInput>;
}

export class SubjectService {
  async create(data: CreateSubjectInput) {
    return await prisma.subject.create({ data });
  }

  async getAll() {
    return await prisma.subject.findMany({
      include: {
        classes: true,
      },
    });
  }

  async getById(id: number) {
    return await prisma.subject.findUnique({
      where: { id },
      include: {
        classes: true,
      },
    });
  }

  async update(id: number, data: UpdateSubjectInput['data']) {
    return await prisma.subject.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.subject.delete({
      where: { id },
    });
  }
}