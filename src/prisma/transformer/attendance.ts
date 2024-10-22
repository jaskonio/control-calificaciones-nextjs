import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { AttendanceViewModel, CreateAttendanceModel } from "@/models/attendance";
import { Attendance } from "@prisma/client";


export function ConverterAttendanceModelToViewModel(model: Attendance & {
    student: any;
    class: any;
    schedule: any;
}): AttendanceViewModel {
    return {
        id: model.id,
        studentId: model.studentId.toString(),
        classId: model.classId.toString(),
        scheduleId: model.scheduleId.toString(),
        date: formatDateToString(model.date),
        attendanceStatus: model.attendanceStatus,
        comments: model.comments,

        student: model.student,
        class: model.class,
        schedule: model.schedule
    };
}


export function ConverterAttendanceInputToAttendanceModel(input: CreateAttendanceModel, type: string): Partial<any> {
    return {
        studentId: Number(input.studentId),
        classId: Number(input.classId),
        scheduleId: Number(input.scheduleId),
        date: parseStringToDate(input.date),
        attendanceStatus: input.attendanceStatus,
        comments: input.comments
    };
}
