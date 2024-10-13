import { ClassViewModel, CreateClassModel } from '@/models/class';
import prisma from '../prisma/client';
import { ConverterClassInputToClassModel, ConverterClassModelToViewModel } from '@/prisma/transformer/class';
import { BaseService } from './baseService';


export class ClassService extends BaseService<CreateClassModel, ClassViewModel> {
  constructor() {
    super(prisma, 'class', ConverterClassInputToClassModel, ConverterClassModelToViewModel);
  }

  protected getInclude() {
    return {
      course: true,
      subject: true,
      teacher: true,
      enrollments: true
    }
  }
}
