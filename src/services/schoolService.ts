import { error } from 'console';
import prisma from '../prisma/client';
import { AcademicYearStatus } from '@prisma/client';
import { formatDateToString } from '@/lib/utils';

interface CreateAcademicYearInput {
  name: string;
  startDate: string;
  endDate: string;
  status: AcademicYearStatus;
}

interface UpdateAcademicYearInput {
  data: Partial<CreateAcademicYearInput>;
}

export class AcademicYearService {
  async create(data: CreateAcademicYearInput) {
    try {
      const dataParsed = {
        name: data.name,
        status: data.status,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate)
      }
      return await prisma.academicYear.create({ data: dataParsed });
    } catch (error) {
      console.error(error)
      throw Error("Error creating acedemic year.")
    }
  }

  async getAll() {
    try {
      const data = await prisma.academicYear.findMany({
        include: {
          courses: true,
          students: true,
          events: true,
        },
        orderBy: { id: 'asc' }
      })

      const dataUpdated = data.map(r => {
        return {
          id: r.id,
          name: r.name,
          status: r.status,
          startDate: formatDateToString(r.startDate),
          endDate: formatDateToString(r.endDate),
          courses: r.courses,
          students: r.students,
          events: r.events
        }
      })

      return dataUpdated
    } catch (eroor) {
      console.error(error)
      throw new Error('Error al obtener los registros')
    }
  }

  async getById(id: number) {
    try {
      const data = await prisma.academicYear.findUnique({
        where: { id },
        include: {
          courses: true,
          students: true,
          events: true,
        },
      });

      if (data == null) {
        return null
      }

      const dataUpdated = {
        name: data.name,
        status: data.status,
        startDate: formatDateToString(data.startDate),
        endDate: formatDateToString(data.endDate),
        courses: data.courses,
        students: data.students,
        events: data.events
      }

      return dataUpdated
    } catch (error) {
      console.error(error)
      throw new Error(`Error al recuperar el ID: ${id}`)
    }
  }

  async update(id: number, data: UpdateAcademicYearInput['data']) {
    try {
      const dataParsed = {
        name: data.name,
        status: data.status,
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        endDate: data.endDate ? new Date(data.endDate) : new Date()
      }

      return await prisma.academicYear.update({
        where: { id },
        data: dataParsed,
      });
    } catch (error) {
      console.error(error)
      throw new Error(`Error al actualizar el ID: ${id}`)
    }
  }

  async delete(id: number) {
    return await prisma.academicYear.delete({
      where: { id },
    });
  }
} 