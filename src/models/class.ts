import { ClassSubject, Enrollment, schduledTimeClassSubject, Subject, Teacher, User } from "@prisma/client";


export type CreateClassModel = Omit<ClassSubject, 'id'| 'courseId' | 'subjectId' | 'teacherId'> & {
    courseId: string;
    subjectId: string;
    teacherId: string;
}

export type UpdateClassModel = CreateClassModel

export type ClassViewModel = CreateClassModel & {
    id: number;

    course: User;
    subject: Subject;
    teacher: Teacher;
    scheduledTime: schduledTimeClassSubject[];
    enrollments: Enrollment[]
}