// src/services/academicYearService.ts
import prisma from '../prisma/client';
import { Prisma, AcademicYearStatus } from '@prisma/client';

interface CreateAcademicYearInput {
  name: string;
  startDate: Date;
  endDate: Date;
  status: AcademicYearStatus;
}

interface UpdateAcademicYearInput {
  data: Partial<CreateAcademicYearInput>;
}

export class AcademicYearService {
  async create(data: CreateAcademicYearInput) {
    return await prisma.academicYear.create({ data });
  }

  async getAll() {
    return await prisma.academicYear.findMany({
      include: {
        courses: true,
        students: true,
        events: true,
      },
    });
  }

  async getById(id: number) {
    return await prisma.academicYear.findUnique({
      where: { id },
      include: {
        courses: true,
        students: true,
        events: true,
      },
    });
  }

  async update(id: number, data: UpdateAcademicYearInput['data']) {
    return await prisma.academicYear.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.academicYear.delete({
      where: { id },
    });
  }
}