import { CreateSubjectModel, SubjectViewModel } from "@/models/subject";
import { Subject } from "@prisma/client";


export function ConverterSubjectToViewModel(model: Subject & {
    class: any[];
}): SubjectViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        status: model.status,

        class: model.class
    };
}

export function ConverterSubjectInputToModel(input: CreateSubjectModel, type: string): Partial<Subject> {
    return {
        name: input.name,
        description: input.description,
        status: input.status,
    };
}
