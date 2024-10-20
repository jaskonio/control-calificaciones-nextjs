import { CreateSubjectModel, SubjectViewModel } from "@/models/subject";
import { Subject } from "@prisma/client";


export function ConverterSubjectToViewModel(model: Subject & {
    classSubject: any[];
}): SubjectViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        gradeLevel: model.gradeLevel,
        status: model.status,

        classSubject: model.classSubject
    };
}

export function ConverterSubjectInputToModel(input: CreateSubjectModel, type: string): Partial<Subject> {
    return {
        name: input.name,
        description: input.description,
        gradeLevel: input.gradeLevel,
        status: input.status,
    };
}
