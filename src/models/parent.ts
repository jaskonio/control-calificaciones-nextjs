import { Student, User } from "@prisma/client";

export interface CreateParentModel {
    userId: number;
    address: string;
    phone: string;
    email: string;
    studentId: number;
}

export interface UpdateParentModel extends CreateParentModel {
}

export interface ParentViewModel {
    id: number;
    userId: number;
    address: string;
    phone: string;
    email: string;
    studentId: number;

    user: User;
    student: Student;
}