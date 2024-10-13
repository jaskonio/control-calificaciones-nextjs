import { CourseViewModel, CreateCourseModel } from '@/models/course';
import prisma from '../prisma/client';
import { ConverterCourseInputToModel, ConverterCourseToViewModel } from '@/prisma/transformer/course';
import { BaseService } from './baseService';


export class CourseService extends BaseService<CreateCourseModel, CourseViewModel> {
  constructor() {
    super(prisma, 'course', ConverterCourseInputToModel, ConverterCourseToViewModel);
  }

  protected getInclude() {
    return {
      academicYear: true,
      classes: true,
    }
  }
}
