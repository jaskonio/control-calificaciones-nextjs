import prisma from '../prisma/client';
import { ConverterEventInputToEventModel, ConverterEventModelToViewModel } from '@/prisma/transformer/event';
import { BaseService } from './baseService';
import { EventViewModel, CreateEventModel } from '@/models/event';
import { CalendarEvent } from '@/types/calendar';


export class EventService extends BaseService<CreateEventModel, EventViewModel> {
    constructor() {
        super(prisma, 'event', ConverterEventInputToEventModel, ConverterEventModelToViewModel);
    }

    async getCalendarEventsByUserId(userId: number) {
        
        const mockEvents: CalendarEvent[] = [
            {
                id: 1,
                title: "Team Standup",
                date: new Date(2024, 9, 1, 10, 0),
                type: "meeting",
            },
            {
                id: 2,
                title: "Project Review",
                date: new Date(2024, 9, 2, 14, 30),
                type: "meeting",
            },
            {
                id: 3,
                title: "Client Call",
                date: new Date(2024, 10, 3, 11, 0),
                type: "call",
            },
        ];

        return mockEvents
    }
    protected getInclude() {
        return {
            academicYear: true,
            schedule: true
        }
    }
}
