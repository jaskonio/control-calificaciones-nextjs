import { ClassViewModel, CreateClassModel } from "@/models/class";
import { Class } from "@prisma/client";


export function ConverterClassModelToViewModel(model: Class & {
    course: any;
    subject: any;
    teacher: any;
    schedule: any[];
    attendances: any[];
    grades: any[];
}): ClassViewModel {
    return {
        id: model.id,
        courseId: model.courseId.toString(),
        subjectId: model.subjectId.toString(),
        teacherId: model.teacherId.toString(),
        comments: model.comments,

        course: model.course,
        subject: model.subject,
        teacher: model.teacher,
        schedule: model.schedule,
        attendances: model.attendances,
        grades: model.grades
    };
}


export function ConverterClassInputToClassModel(input: CreateClassModel, type: string): Partial<any> {
    return {
        courseId: Number(input.courseId),
        subjectId: Number(input.subjectId),
        teacherId: Number(input.teacherId),
        comments: input.comments,
    };
}
