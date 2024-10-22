import { Attendance, Class, Schedule, Student } from "@prisma/client";

export type CreateAttendanceModel = Omit<Attendance, 'id' | 'studentId' | 'classId' | 'scheduleId' | 'date'> & {
    studentId: string;
    classId: string;
    scheduleId: string;
    date: string;
}

export type AttendanceViewModel = CreateAttendanceModel & {
    id: number;

    student: Student;
    class: Class;
    schedule: Schedule;
}