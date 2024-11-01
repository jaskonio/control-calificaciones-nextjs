import { Attendance, Class, Event, Student, AcademicYear } from '@prisma/client';

export type CreateAttendanceModel = Omit<Attendance, 'id' | 'date'> & {
    date: string;
}

export type AttendanceViewModel = CreateAttendanceModel & {
    id: number;

    academicYearId: number;
    academicYearName: string;

    student: Student;
    event: Event;
    class: Class;
}