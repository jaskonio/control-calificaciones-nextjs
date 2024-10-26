import { ClassViewModel, CreateClassModel } from "@/models/class";
import { Attendance, Class, EventParticipant, Grade, Subject, Teacher, User } from "@prisma/client";


export function ConverterClassModelToViewModel(model: Class & {
    course: User;
    subject: Subject;
    teacher: Teacher;
    grades: Grade[];
    eventParticipant: EventParticipant[]
    attendances: Attendance[];
}): ClassViewModel {
    return {
        id: model.id,
        courseId: model.courseId,
        subjectId: model.subjectId,
        teacherId: model.teacherId,
        comments: model.comments,

        course: model.course,
        subject: model.subject,
        teacher: model.teacher,
        grades: model.grades,
        eventParticipant: model.eventParticipant,
        attendances: model.attendances
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
