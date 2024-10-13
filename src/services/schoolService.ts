import { AcademicYearViewModel, CreateAcademicYearModel } from '@/models/academicYear';
import { BaseService } from './baseService';
import prisma from '@/prisma/client';
import { transformAcademicYearToViewModel, transformInputToPrismaData } from '@/prisma/transformer/academicYear';


export class AcademicYearService extends BaseService<CreateAcademicYearModel, AcademicYearViewModel> {
  constructor() {
    super(prisma, 'academicYear', transformInputToPrismaData, transformAcademicYearToViewModel);
  }

  protected getInclude() {
    return {
      courses: true,
      students: true,
      events: true
    }
  }
}