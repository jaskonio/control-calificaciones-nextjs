import { Class, Subject } from "@prisma/client";

export type CreateSubjectModel = Omit<Subject, 'id'>

export type UpdateSubjectModel = CreateSubjectModel

export type SubjectViewModel =  CreateSubjectModel & {
    id: number;

    classes: Class[];
}