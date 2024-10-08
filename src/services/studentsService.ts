import prisma from '../prisma/client';
import { EnrollmentStatus } from '@prisma/client';

interface CreateStudentInput {
  userId: number;
  birthDate: Date;
  address: string;
  phone: string;
  enrollmentDate: Date;
  gradeLevel: string;
  academicYearId: number;
}

interface UpdateStudentInput {
  id: number;
  data: Partial<CreateStudentInput>;
}

export class StudentService {
  async create(data: CreateStudentInput) {
    return await prisma.student.create({
      data,
    });
  }

  async getAll() {
    return await prisma.student.findMany({
      include: {
        user: true,
        academicYear: true,
        parents: true,
        enrollments: true,
      },
    });
  }

  async getById(id: number) {
    return await prisma.student.findUnique({
      where: { id },
      include: {
        user: true,
        academicYear: true,
        parents: true,
        enrollments: true,
      },
    });
  }

  async update({ id, data }: UpdateStudentInput) {
    return await prisma.student.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.student.delete({
      where: { id },
    });
  }
}