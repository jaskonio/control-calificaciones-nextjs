import prisma from '../prisma/client';
import { ConverterEventInputToEventModel, ConverterEventModelToViewModel } from '@/prisma/transformer/event';
import { BaseService } from './baseService';
import { EventViewModel, CreateEventModel } from '@/models/event';


export class EventService extends BaseService<CreateEventModel, EventViewModel> {
    constructor() {
        super(prisma, 'event', ConverterEventInputToEventModel, ConverterEventModelToViewModel);
    }

    protected getInclude() {
        return {
            academicYear: true,
            schedule: true
        }
    }
}
