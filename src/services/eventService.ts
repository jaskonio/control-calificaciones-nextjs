import prisma from '../prisma/client';
import { ConverterEventInputToEventModel, ConverterEventModelToViewModel } from '@/prisma/transformer/event';
import { BaseService } from './baseService';
import { EventViewModel, CreateEventModel } from '@/models/event';
import { EntityCalendarEvents } from '@/types/calendar';
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

    async getCalendarEventsByStudentId(userId: number) {
        const events = await this.getEventParticipantById(userId, ParticipantType.student)
        return this.groupEventsByAcademicYear(events);
    }

    async getEventParticipantById(participantId: number, participantType: ParticipantType) {
        const eventParticipant = await prisma.eventParticipant.findMany({
            where: { participantId: participantId, participantType: participantType },
            include: {
                event: {
                    include: this.getInclude()
                }
            }
        });

        const events = eventParticipant.map(ep => ep.event)

        return events.map(ConverterEventModelToViewModel)
    }

    private groupEventsByAcademicYear(events: EventViewModel[]): EntityCalendarEvents[] {
        return events.reduce((acc, event) => {
            let calendarEvent = acc.find(e => e.entityId === event.academicYearId);

            if (!calendarEvent) {
                calendarEvent = {
                    entityId: event.academicYearId,
                    entityName: event.academicYear.name,
                    events: []
                };
                acc.push(calendarEvent);
            }

            calendarEvent.events.push(...event.schedules.map(schedule => ({
                id: schedule.id,
                date: schedule.date,
                title: `${schedule.startTime}-${schedule.endTime}: ${event.title}`,
                type: event.eventType
            })));

            return acc;
        }, [] as EntityCalendarEvents[]);
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
