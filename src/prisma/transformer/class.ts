import { ClassViewModel, CreateClassModel } from "@/models/class";
import { Attendance, Class, EventParticipant, Grade, Subject, Teacher } from "@prisma/client";
import { ConverterCourseToViewModel, EntityCourse } from "./course";


export type EntityClass = Class & {
    course?: EntityCourse;
    subject?: Subject;
    teacher?: Teacher;
    grades?: Grade[];
    eventParticipant?: EventParticipant[]
    attendances?: Attendance[];
}

export function ConverterClassModelToViewModel(model: EntityClass): ClassViewModel {
    return {
        id: model.id,
        courseId: model.courseId,
        subjectId: model.subjectId,
        teacherId: model.teacherId,
        comments: model.comments,

        course: model.course as EntityCourse,
        subject: model.subject as Subject,
        teacher: model.teacher as Teacher,
        grades: model.grades ?? [],
        eventParticipant: model.eventParticipant ?? [],
        attendances: model.attendances ?? []
    };
}


export function ConverterClassInputToClassModel(input: CreateClassModel, type: string): Partial<any> {
    return {
        courseId: input.courseId,
        subjectId: input.subjectId,
        teacherId: input.teacherId,
        comments: input.comments,
    };
}
