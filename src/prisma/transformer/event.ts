import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { EventViewModel, CreateEventModel } from "@/models/event";
import { AcademicYear, Attendance, Classroom, Event, EventParticipant, Schedule } from "@prisma/client";


export function ConverterEventModelToViewModel(model: Event & {
    academicYear: AcademicYear;
    classroom: Classroom;
    participants: EventParticipant[];
    schedules: Schedule[];
    attendance: Attendance[];
}): EventViewModel {
    return {
        id: model.id,
        academicYearId: model.academicYearId,
        classroomId: model.classroomId,
        eventType: model.eventType,
        title: model.title,
        description: model.description,
        date: formatDateToString(model.date),

        academicYear: model.academicYear,
        classroom: model.classroom,
        participants: model.participants,
        schedules: model.schedules,
        attendance: model.attendance
    };
}


export function ConverterEventInputToEventModel(input: CreateEventModel, type: string): Partial<any> {
    return {
        academicYearId: input.academicYearId,
        classroomId: input.classroomId,
        eventType: input.eventType,
        title: input.title,
        description: input.description,
        date: parseStringToDate(input.date)
    };
}
