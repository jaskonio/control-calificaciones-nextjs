import { error } from 'console';
import prisma from '../prisma/client';
import { AcademicYearViewModel, CreateAcademicYearModel, UpdateAcademicYearModel } from '@/models/academicYear';
import { transformAcademicYearToViewModel, transformInputToPrismaData } from '@/prisma/transformer/academicYear';


export class AcademicYearService {
  async create(data: CreateAcademicYearModel) {
    try {
      const dataParsed = transformInputToPrismaData(data);

      const createdAcademicYear = await prisma.academicYear.create({
        data: dataParsed, include: {
          courses: true,
          students: true,
          events: true,
        },
      });

      return transformAcademicYearToViewModel(createdAcademicYear);
    } catch (error) {
      console.error(error)
      throw Error("Error creando el año académico")
    }
  }

  async getAll(): Promise<AcademicYearViewModel[]> {
    try {
      const data = await prisma.academicYear.findMany({
        include: {
          courses: true,
          students: true,
          events: true,
        },
        orderBy: { id: 'asc' }
      })

      return data.map(transformAcademicYearToViewModel)
    } catch (eroor) {
      console.error(error)
      throw new Error('Error al obtener los registros.')
    }
  }

  async getById(id: number): Promise<AcademicYearViewModel | null> {
    try {
      const data = await prisma.academicYear.findFirstOrThrow({
        where: { id },
        include: {
          courses: true,
          students: true,
          events: true,
        },
      });

      if (!data) return null

      return transformAcademicYearToViewModel(data)
    } catch (error) {
      console.error(error)
      throw new Error(`Error al recuperar el año académico con ID: ${id}`)
    }
  }

  async update(id: number, data: UpdateAcademicYearModel): Promise<AcademicYearViewModel> {
    try {
      const dataParsed = transformInputToPrismaData(data);

      const updatedAcademicYear = await prisma.academicYear.update({
        where: { id },
        data: dataParsed,
        include: {
          courses: true,
          students: true,
          events: true,
        },
      });

      return transformAcademicYearToViewModel(updatedAcademicYear);
    } catch (error) {
      console.error(error)
      throw new Error(`Error al actualizar el año académico con ID: ${id}`)
    }
  }

  async delete(id: number) {
    try {
      return await prisma.academicYear.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      throw new Error(`Error al eliminar el año académico con ID: ${id}`);
    }
  }
} 