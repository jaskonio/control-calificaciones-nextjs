import { StudentViewModel, CreateStudentModel } from '@/models/student';
import prisma from '../prisma/client';
import { ConverterStudentInputToModel, ConverterStudentToViewModel } from '@/prisma/transformer/student';
import { BaseService } from './baseService';


export class StudentService extends BaseService<CreateStudentModel, StudentViewModel> {
  constructor() {
    super(prisma, 'student', ConverterStudentInputToModel, ConverterStudentToViewModel);
  }

  protected getInclude() {
    return {
      user: true,
      academicYear: true,
      parents: true,
      enrollments: true
    }
  }
}
