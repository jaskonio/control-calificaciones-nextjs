import { Class, Grade, Student } from "@prisma/client";

export type CreateGradeModel = Omit<Grade, 'id' | 'studentId' | 'classId' | 'evaluationDate'> & {
    studentId: string;
    classId: string;
    evaluationDate: string;
}

export type GradeViewModel = CreateGradeModel & {
    id: number;

    student: Student;
    class: Class;
}