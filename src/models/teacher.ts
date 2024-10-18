import { Class, Teacher, User, UserStatus } from "@prisma/client";

type rewriteProperties = {
    name: string,
    email: string,
    password: string,
    statusUser: UserStatus,

    hireDate: string
}

export type CreateTeacherModel = Omit<Teacher, 'id'|'hireDate'> & rewriteProperties

export type UpdateTeacherModel = CreateTeacherModel

export type TeacherViewModel =  CreateTeacherModel & {
    id: number;

    user: User;
    classes: Class[];
}