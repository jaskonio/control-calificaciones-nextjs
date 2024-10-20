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
        courseId: model.courseId,
        subjectId: model.subjectId,
        teacherId: model.teacherId,
        classroom: model.classroom,

        course: model.course,
        subject: model.subject,
        teacher: model.teacher,
        scheduledTime: model.scheduledTime,
        enrollments: model.enrollments
    };
}


export function ConverterClassInputToClassModel(input: CreateClassModel, type: string): Partial<ClassSubject> {
    return {
        courseId: input.courseId,
        subjectId: input.subjectId,
        teacherId: input.teacherId,
        classroom: input.classroom,
    };
}
