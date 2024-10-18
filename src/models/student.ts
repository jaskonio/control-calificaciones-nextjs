import { AcademicYear, Enrollment, Parent, User, UserStatus } from "@prisma/client";

export interface CreateStudentModel {
    name: string,
    email: string,
    password: string,
    status: UserStatus,

    userId: number;
    birthDate: string;
    address: string;
    phone: string;
    enrollmentDate: string;
    gradeLevel: string;
}

export interface UpdateStudentModel extends CreateStudentModel {
}

export interface StudentViewModel {
    id: number;

    name: string,
    email: string,
    password: string,
    status: UserStatus,

    userId: number;
    birthDate: string;
    address: string;
    phone: string;
    enrollmentDate: string;
    gradeLevel: string;

    user: User;
    academicYear: AcademicYear;
    parents: Parent[];
    enrollments: Enrollment[];
}