import prisma from '../prisma/client';
import { CourseStatus } from '@prisma/client';

interface CreateCourseInput {
  name: string;
  description: string;
  academicYearId: number;
  gradeLevel: string;
  status: CourseStatus;
}

interface UpdateCourseInput {
  id: number;
  data: Partial<CreateCourseInput>;
}

export class CourseService {
  async create(data: CreateCourseInput) {
    try {
      return await prisma.course.create({
        data,
      });
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getAll() {
    try {
      const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))
      await wait(2000)

      return await prisma.course.findMany({
        include: {
          academicYear: true,
          classes: true,
        },
      });
    } catch (error) {
      return []
    }
  }

  async getById(id: number) {
    return await prisma.course.findFirstOrThrow({
      where: { id },
      include: {
        academicYear: true,
        classes: true,
      },
    });
  }

  async update({ id, data }: UpdateCourseInput) {
    return await prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    try {
      return await prisma.course.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error)
      return null
    }
  }
}