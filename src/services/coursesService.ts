import { CourseViewModel, CreateCourseModel } from '@/models/courses';
import prisma from '../prisma/client';
import { transformCourseInputToPrismaData, transformCourseToViewModel } from '@/prisma/transformer/courses';
import { BaseService } from './baseService';


export class CourseService extends BaseService<CreateCourseModel, CourseViewModel> {
  constructor() {
    super(prisma, 'course', transformCourseInputToPrismaData, transformCourseToViewModel);
  }

  protected getInclude() {
    return {
      academicYear: true,
      classes: true,
    }
  }
}
