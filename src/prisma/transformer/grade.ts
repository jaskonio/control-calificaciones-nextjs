import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { GradeViewModel, CreateGradeModel } from "@/models/grade";
import { Grade } from "@prisma/client";


export function ConverterGradeModelToViewModel(model: Grade & {
    student: any;
    class: any;
}): GradeViewModel {
    return {
        id: model.id,
        studentId: model.studentId.toString(),
        classId: model.classId.toString(),
        evaluationType: model.evaluationType,
        score: model.score,
        evaluationDate: formatDateToString(model.evaluationDate),
        description: model.description,

        student: model.student,
        class: model.class,
    };
}


export function ConverterGradeInputToGradeModel(input: CreateGradeModel, type: string): Partial<any> {
    return {
        studentId: Number(input.studentId),
        classId: Number(input.classId),
        evaluationType: input.evaluationType,
        score: input.score,
        evaluationDate: parseStringToDate(input.evaluationDate),
        description: input.description,
    };
}
