import { Attendance, Grade, Parent, Student, User, UserStatus } from "@prisma/client";

export type CreateStudentModel = Omit<Student, 'id' | 'birthDate' | 'enrollmentDate'> & {
    name: string;
    email: string;
    password: string;
    status: UserStatus;

    birthDate: string;
    enrollmentDate: string;
}

export type StudentViewModel = CreateStudentModel & {
    id: number;

    user: User;
    parents: Parent[];
    attendance: Attendance[];
    grade: Grade[];
}