import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { AttendanceViewModel, CreateAttendanceModel } from "@/models/attendance";
import { Attendance, Class, Student, Event } from "@prisma/client";


export function ConverterAttendanceModelToViewModel(model: Attendance & {
    student: Student;
    event: Event;
    class: Class;
}): AttendanceViewModel {
    return {
        id: model.id,
        studentId: model.studentId,
        eventId: model.eventId,
        classId: model.classId,
        date: formatDateToString(model.date),
        attendanceStatus: model.attendanceStatus,
        comments: model.comments,

        student: model.student,
        event: model.event,
        class: model.class
    };
}

export function ConverterAttendanceInputToAttendanceModel(input: CreateAttendanceModel, type: string): Partial<any> {
    return {
        studentId: input.studentId,
        eventId: input.eventId,
        classId: input.classId,
        date: parseStringToDate(input.date),
        attendanceStatus: input.attendanceStatus,
        comments: input.comments
    };
}
