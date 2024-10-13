import { AcademicYear, Enrollment, Parent, User } from "@prisma/client";

export interface CreateStudentModel {
    userId: number;
    birthDate: string;
    address: string;
    phone: string;
    enrollmentDate: string;
    gradeLevel: string;
    academicYearId: number
}

export interface UpdateStudentModel extends CreateStudentModel {
}

export interface StudentViewModel {
    id: number;
    userId: number;
    birthDate: string;
    address: string;
    phone: string;
    enrollmentDate: string;
    gradeLevel: string;
    academicYearId: number

    user: User;
    academicYear: AcademicYear;
    parents: Parent[];
    enrollments: Enrollment[];
}