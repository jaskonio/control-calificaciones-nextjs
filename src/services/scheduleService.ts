import prisma from '../prisma/client';
import { ConverterScheduleInputToScheduleModel, ConverterScheduleModelToViewModel } from '@/prisma/transformer/schedule';
import { BaseService } from './baseService';
import { ScheduleViewModel, CreateScheduleModel } from '@/models/schedule';


export class ScheduleService extends BaseService<CreateScheduleModel, ScheduleViewModel> {
    constructor() {
        super(prisma, 'schedule', ConverterScheduleInputToScheduleModel, ConverterScheduleModelToViewModel);
    }

    protected getInclude() {
        return {
            classroom: true,
            class: true,
            event: true,
            attendances: true
        }
    }
}
