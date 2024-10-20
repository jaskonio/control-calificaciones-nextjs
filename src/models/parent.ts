import { Student, User, UserStatus } from "@prisma/client";

export interface CreateParentModel {
    name: string,
    email: string,
    password: string,
    status: UserStatus,

    userId: number;
    address: string;
    phone: string;
}

export interface UpdateParentModel extends CreateParentModel {
}

export interface ParentViewModel {
    id: number;

    name: string,
    email: string,
    password: string,
    status: UserStatus,

    userId: number;
    address: string;
    phone: string;

    user: User;
    student: Student;
}