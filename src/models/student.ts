import { Attendance, EventParticipant, Grade, Parent, Student, User, UserStatus } from "@prisma/client";

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
    grade: Grade[];
    eventParticipant: EventParticipant[];
    attendance: Attendance[];
}