import { CourseViewModel, CreateCourseModel } from '@/models/Parent';
import prisma from '../prisma/client';
import { ConverterCourseInputToModel, ConverterCourseToViewModel } from '@/prisma/transformer/course';
import { BaseService } from './baseService';


export class CourseService extends BaseService<CreateCourseModel, CourseViewModel> {
  constructor() {
    super(prisma, 'parent', ConverterCourseInputToModel, ConverterCourseToViewModel);
  }

  protected getInclude() {
    return {
      academicYear: true,
      classes: true,
    }
  }
}
