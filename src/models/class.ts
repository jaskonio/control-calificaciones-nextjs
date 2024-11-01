import { Attendance, Class, Course, EventParticipant, Grade, Schedule, Subject, Teacher, User } from "@prisma/client";


export type CreateClassModel = Omit<Class, 'id'> & {
}

export type ClassViewModel = CreateClassModel & {
    id: number;

    course: Course;
    subject: Subject;
    teacher: Teacher;
    grades: Grade[];
    eventParticipant: EventParticipant[]
    attendances: Attendance[];
}