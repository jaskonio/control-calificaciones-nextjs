import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { AttendanceViewModel, CreateAttendanceModel } from "@/models/attendance";
import { Attendance, Class, Student, Event } from "@prisma/client";
import { EntityClass } from "./class";


export function ConverterAttendanceModelToViewModel(model: Attendance & {
    student?: Student;
    event?: Event;
    class?: EntityClass;
}): AttendanceViewModel {
    return {
        id: model.id,
        studentId: model.studentId,
        eventId: model.eventId,
        classId: model.classId,
        date: formatDateToString(model.date),
        attendanceStatus: model.attendanceStatus,
        comments: model.comments,
        
        academicYearId: model.class?.course?.academicYearId ?? 0,
        academicYearName: model.class?.course?.academicYear?.name ?? "N/A",

        student: model.student as Student,
        event: model.event as Event,
        class: model.class as Class
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
