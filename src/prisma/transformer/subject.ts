import { CreateSubjectModel, SubjectViewModel } from "@/models/subject";
import { Subject } from "@prisma/client";


export function ConverterSubjectToViewModel(model: Subject & {
    classes: any[];
}): SubjectViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        gradeLevel: model.gradeLevel,
        status: model.status,

        classes: model.classes
    };
}

export function ConverterSubjectInputToModel(input: CreateSubjectModel): Partial<Subject> {
    return {
        name: input.name,
        description: input.description,
        gradeLevel: input.gradeLevel,
        status: input.status,
    };
}
