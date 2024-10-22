import { ClassRoomViewModel, CreateClassRoomModel } from '@/models/classroom';
import prisma from '../prisma/client';
import { ConverterClassRoomInputToClassRoomModel, ConverterClassRoomModelToViewModel } from '@/prisma/transformer/classRoom';
import { BaseService } from './baseService';


export class ClassRoomService extends BaseService<CreateClassRoomModel, ClassRoomViewModel> {
  constructor() {
    super(prisma, 'classroom', ConverterClassRoomInputToClassRoomModel, ConverterClassRoomModelToViewModel);
  }

  protected getInclude() {
    return {
      schedules: true
    }
  }
}
