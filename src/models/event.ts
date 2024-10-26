import { AcademicYear, Attendance, Classroom, Event, EventParticipant, Schedule } from "@prisma/client";

export type CreateEventModel = Omit<Event, 'id' | 'date'> & {
    date: string;
}

export type EventViewModel = CreateEventModel & {
    id: number;

    academicYear: AcademicYear;
    classroom: Classroom;
    participants: EventParticipant[];
    schedules: Schedule[];
    attendance: Attendance[];
}