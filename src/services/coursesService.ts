import { CourseViewModel, CreateCourseModel, UpdateCourseModel } from '@/models/courses';
import prisma from '../prisma/client';
import { transformCourseInputToPrismaData, transformCourseToViewModel } from '@/prisma/transformer/courses';


export class CourseService {
  async create(data: CreateCourseModel) {
    try {
      const dataTransformed = transformCourseInputToPrismaData(data)
      
      return await prisma.course.create({
        data: dataTransformed,
        include: {
          academicYear: true,
          classes: true
        }
      });
    } catch (error) {
      console.error(error)
      throw Error("Error creando el nuevo Curso")
    }
  }

  async getAll(): Promise<CourseViewModel[]>{
    try {
      const results = await prisma.course.findMany({
        include: {
          academicYear: true,
          classes: true,
        },
        orderBy: {
          id: 'asc'
        }
      });

      return results.map(transformCourseToViewModel)
    } catch (error) {
      console.error(error)
      throw new Error('Error al obtener los registros.')
    }
  }

  async getById(id: number) {
    try {
      const data = await prisma.course.findFirstOrThrow({
        where: { id },
        include: {
          academicYear: true,
          classes: true,
        },
      });

      if (!data) return null

      return transformCourseToViewModel(data)
    } catch (error) {
      console.error(error)
      throw new Error(`Error al recuperar el cuerso con ID: ${id}`)
    }
  }

  async update(id: number, data: UpdateCourseModel) {
    try {
      const dataTransformed = transformCourseInputToPrismaData(data)
      
      const dataUpdated = await prisma.course.update({
        where: { id },
        data: dataTransformed,
        include: {
          academicYear: true,
          classes: true
        }
      });

      return transformCourseToViewModel(dataUpdated)
    } catch (error) {
      console.error(error)
      throw new Error(`Error al actualizar el curso con ID: ${id}`)
    }
  }

  async delete(id: number) {
    try {
      return await prisma.course.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw new Error(`Error al eliminar el curso con ID: ${id}`);
    }
  }
}