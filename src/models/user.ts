import { Parent, Student, Teacher, User } from "@prisma/client";

export type CreateUserModel = Omit<User, 'id'> & {
}

export type UserViewModel = CreateUserModel & {
    id: number;

    student?: Student;
    teacher?: Teacher;
    parent?: Parent;
}