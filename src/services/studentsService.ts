import { StudentViewModel, CreateStudentModel } from '@/models/student';
import prisma from '../prisma/client';
import { ConverterStudentInputToModel, ConverterStudentToViewModel } from '@/prisma/transformer/student';
import { BaseService } from './baseService';


export class StudentService extends BaseService<CreateStudentModel, StudentViewModel> {
  constructor() {
    super(prisma, 'student', ConverterStudentInputToModel, ConverterStudentToViewModel);
  }

  async delete(id: number): Promise<StudentViewModel> {
    try {
      const currentUser = await this.getById(id)

      const deletedData = this.prisma.student.delete({
        where: { id },
        include: this.getInclude(),
      });

      const deleteduserData = this.prisma.user.delete({
        where: { id: currentUser.userId }
      });

      const transaction = await prisma.$transaction([deletedData, deleteduserData])

      return this.convertEntityToViewModel(transaction[0]);
    } catch (error) {
      console.error(error);
      throw new Error(`Error al eliminar el ${this.model.toString()} con ID: ${id}`);
    }
  }

  protected getInclude() {
    return {
      user: true,
      parents: true,
      attendance: true,
      grade: true
    }
  }
}
