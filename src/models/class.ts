import { Attendance, Class, Grade, Schedule, Subject, Teacher, User } from "@prisma/client";


export type CreateClassModel = Omit<Class, 'id' | 'courseId' | 'subjectId' | 'teacherId'> & {
    courseId: string;
    subjectId: string;
    teacherId: string;
}

export type ClassViewModel = CreateClassModel & {
    id: number;

    course: User;
    subject: Subject;
    teacher: Teacher;
    schedule: Schedule[];
    attendances: Attendance[];
    grades: Grade[];
}