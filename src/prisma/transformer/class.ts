import { ClassViewModel, CreateClassModel } from "@/models/class";
import { ClassSubject } from "@prisma/client";


export function ConverterClassModelToViewModel(model: ClassSubject & {
    course: any;
    subject: any;
    teacher: any;
    scheduledTime: any[];
    enrollments: any[];
}): ClassViewModel {
    return {
        id: model.id,
        courseId: model.courseId.toString(),
        subjectId: model.subjectId.toString(),
        teacherId: model.teacherId.toString(),
        classroom: model.classroom,

        course: model.course,
        subject: model.subject,
        teacher: model.teacher,
        scheduledTime: model.scheduledTime,
        enrollments: model.enrollments
    };
}


export function ConverterClassInputToClassModel(input: CreateClassModel, type: string): Partial<any> {
    return {
        courseId: Number(input.courseId),
        subjectId: Number(input.subjectId),
        teacherId: Number(input.teacherId),
        classroom: input.classroom,
    };
}
