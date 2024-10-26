import { Event, Schedule } from "@prisma/client";

export type CreateScheduleModel = Omit<Schedule, 'id' | 'eventId' | 'date'> & {
    eventId?: string;
    date: string

    label: string
}

export type ScheduleViewModel = CreateScheduleModel & {
    id: number;

    event: Event;
}