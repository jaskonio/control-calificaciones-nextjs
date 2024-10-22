import { Parent, Student, User, UserStatus } from "@prisma/client";

export type CreateParentModel = Omit<Parent, 'id'> & {
    name: string;
    email: string;
    password: string;
    status: UserStatus;
}

export type ParentViewModel = CreateParentModel & {
    id: number;

    user: User;
    student: Student[];
}