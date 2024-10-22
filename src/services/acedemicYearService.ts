import { AcademicYearViewModel, CreateAcademicYearModel } from '@/models/academicYear';
import { BaseService } from './baseService';
import prisma from '@/prisma/client';
import { ConverterAcademicYearToViewModel, ConverterInputToPrismaData } from '@/prisma/transformer/academicYear';


export class AcademicYearService extends BaseService<CreateAcademicYearModel, AcademicYearViewModel> {
  constructor() {
    super(prisma, 'academicYear', ConverterInputToPrismaData, ConverterAcademicYearToViewModel);
  }

  protected getInclude() {
    return {
      courses: true,
      events: true
    }
  }
}