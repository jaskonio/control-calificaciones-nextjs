import prisma from '../prisma/client';
import { ConverterEventInputToEventModel, ConverterEventModelToViewModel } from '@/prisma/transformer/event';
import { BaseService } from './baseService';
import { EventViewModel, CreateEventModel } from '@/models/event';
import { CalendarEvent } from '@/types/calendar';
import { ParticipantType } from '@prisma/client';
import { StudentService } from './studentsService';
import { ParentService } from './parentService';
import { ClassService } from './classService';
import { TeacherService } from './teacherService';


export class EventService extends BaseService<CreateEventModel, EventViewModel> {
    protected studenService: StudentService;
    protected teacherService: TeacherService;
    protected parentService: ParentService;
    protected classService: ClassService;

    constructor() {
        super(prisma, 'event', ConverterEventInputToEventModel, ConverterEventModelToViewModel);

        this.studenService = new StudentService()
        this.teacherService = new TeacherService()
        this.parentService = new ParentService()
        this.classService = new ClassService()
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

    async getEventParticipantById(participantId: number) {
        const eventParticipant = await prisma.eventParticipant.findUnique({
            where: { id: participantId },
        });

        if (!eventParticipant) {
            throw new Error('EventParticipant not found');
        }

        switch (eventParticipant.participantType) {
            case ParticipantType.student:
                return (await this.studenService.getById(eventParticipant.participantId));

            case ParticipantType.teacher:
                return (await this.teacherService.getById(eventParticipant.participantId));

            case ParticipantType.parent:
                return (await this.parentService.getById(eventParticipant.participantId));

            case ParticipantType.class:
                return (await this.classService.getById(eventParticipant.participantId));

            default:
                throw new Error('Invalid participant type');
        }
    }

    protected getInclude() {
        return {
            academicYear: true,
            classroom: true,
            participants: true,
            schedules: true,
            attendance: true
        }
    }
}
