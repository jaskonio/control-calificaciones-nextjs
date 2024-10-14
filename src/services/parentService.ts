import { ParentViewModel, CreateParentModel } from '@/models/parent';
import prisma from '../prisma/client';
import { ConverterParentInputToModel, ConverterParentToViewModel } from '@/prisma/transformer/parent';
import { BaseService } from './baseService';


export class ParentService extends BaseService<CreateParentModel, ParentViewModel> {
  constructor() {
    super(prisma, 'parent', ConverterParentInputToModel, ConverterParentToViewModel);
  }

  protected getInclude() {
    return {
      user: true,
      student: true,
    }
  }
}
