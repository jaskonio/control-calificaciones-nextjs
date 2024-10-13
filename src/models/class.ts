import { Class, Enrollment, Subject, Teacher, User } from "@prisma/client";


export type CreateClassModel = Omit<Class, 'id'>

export type UpdateClassModel = CreateClassModel

export type ClassViewModel = CreateClassModel & {
    id: number;

    course: User;
    subject: Subject;
    teacher: Teacher;
    enrollments: Enrollment[]
}