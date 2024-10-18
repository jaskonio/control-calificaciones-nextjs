import { CreateTeacherModel, TeacherViewModel } from '@/models/teacher';
import prisma from '../prisma/client';
import { ConverterTeacherInputToModel, ConverterTeacherToViewModel } from '@/prisma/transformer/teacher';
import { BaseService } from './baseService';


export class TeacherService extends BaseService<CreateTeacherModel, TeacherViewModel> {
  constructor() {
    super(prisma, 'teacher', ConverterTeacherInputToModel, ConverterTeacherToViewModel);
  }

  async delete(id: number): Promise<TeacherViewModel> {
    try {
      const currentUser = await this.getById(id)

      const deletedData = this.prisma.teacher.delete({
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
      classes: true,
    }
  }
}
