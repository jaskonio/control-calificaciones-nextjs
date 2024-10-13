import { Class, Teacher, User } from "@prisma/client";

type rewriteProperties = {
    hireDate: string
}

export type CreateTeacherModel = Omit<Teacher, 'id'|'hireDate'> & rewriteProperties

export type UpdateTeacherModel = CreateTeacherModel

export type TeacherViewModel =  CreateTeacherModel & {
    id: number;

    user: User;
    classes: Class[];
}