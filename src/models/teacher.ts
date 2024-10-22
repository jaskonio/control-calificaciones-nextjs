import { Class, Teacher, User, UserStatus } from "@prisma/client";


export type CreateTeacherModel = Omit<Teacher, 'id' | 'hireDate'> & {
    name: string;
    email: string;
    password: string;
    statusUser: UserStatus,

    hireDate: string
}

export type TeacherViewModel = CreateTeacherModel & {
    id: number;

    user: User;
    class: Class[];
}