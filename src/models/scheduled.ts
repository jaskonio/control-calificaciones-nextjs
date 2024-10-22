import { Attendance, Class, Classroom, Schedule } from "@prisma/client";

export type CreateScheduleModel = Omit<Schedule, 'id' | 'startTime' | 'endTime' | 'classroomId' | 'classId' | 'eventId'> & {
    classroomId: string;
    classId?: string;
    eventId?: string;
    startTime: string;
    endTime: string;
}

export type ScheduleViewModel = CreateScheduleModel & {
    id: number;

    classroom: Classroom;
    class?: Class;
    event?: Event;
    attendances: Attendance[];
}