import { ClassViewModel, CreateClassModel } from "@/models/class";
import { Class } from "@prisma/client";


export function ConverterClassModelToViewModel(model: Class & {
    course: any;
    subject: any;
    teacher: any;
    enrollments: any[];
}): ClassViewModel {
    return {
        id: model.id,
        courseId: model.courseId,
        subjectId: model.subjectId,
        teacherId: model.teacherId,
        classroom: model.classroom,
        startTime: model.startTime,
        endTime: model.endTime,
        dayOfWeek: model.dayOfWeek,

        course: model.course,
        subject: model.subject,
        teacher: model.teacher,
        enrollments: model.enrollments
    };
}


export function ConverterClassInputToClassModel(input: CreateClassModel): Partial<Class> {
    return {
        courseId: input.courseId,
        subjectId: input.subjectId,
        teacherId: input.teacherId,
        classroom: input.classroom,
        startTime: input.startTime,
        endTime: input.endTime,
        dayOfWeek: input.dayOfWeek,
    };
}
