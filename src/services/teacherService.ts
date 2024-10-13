import { CreateTeacherModel, TeacherViewModel } from '@/models/teacher';
import prisma from '../prisma/client';
import { ConverterTeacherInputToModel, ConverterTeacherToViewModel } from '@/prisma/transformer/teacher';
import { BaseService } from './baseService';


export class TeacherService extends BaseService<CreateTeacherModel, TeacherViewModel> {
  constructor() {
    super(prisma, 'teacher', ConverterTeacherInputToModel, ConverterTeacherToViewModel);
  }

  protected getInclude() {
    return {
      user: true,
      classes: true,
    }
  }
}
