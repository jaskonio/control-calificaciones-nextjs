import { Attendance, Class, Event, Student } from "@prisma/client";

export type CreateAttendanceModel = Omit<Attendance, 'id' | 'date'> & {
    date: string;
}

export type AttendanceViewModel = CreateAttendanceModel & {
    id: number;

    student: Student;
    event: Event;
    class: Class;
}