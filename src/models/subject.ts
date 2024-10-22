import { Class, Subject } from "@prisma/client";

export type CreateSubjectModel = Omit<Subject, 'id'>

export type SubjectViewModel = CreateSubjectModel & {
    id: number;

    class: Class[];
}