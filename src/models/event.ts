import { AcademicYear, Event, Schedule } from "@prisma/client";

export type CreateEventModel = Omit<Event, 'id' | 'academicYearId' | 'scheduleId' | 'date'> & {
    academicYearId: string;
    scheduleId: string;
    date: string;
}

export type EventViewModel = CreateEventModel & {
    id: number;

    academicYear: AcademicYear;
    schedule: Schedule[];
}