import { SubjectViewModel, CreateSubjectModel } from '@/models/subject';
import prisma from '../prisma/client';
import { ConverterSubjectInputToModel, ConverterSubjectToViewModel } from '@/prisma/transformer/subject';
import { BaseService } from './baseService';


export class SubjectService extends BaseService<CreateSubjectModel, SubjectViewModel> {
  constructor() {
    super(prisma, 'subject', ConverterSubjectInputToModel, ConverterSubjectToViewModel);
  }

  protected getInclude() {
    return {
      classSubject: true
    }
  }
}
