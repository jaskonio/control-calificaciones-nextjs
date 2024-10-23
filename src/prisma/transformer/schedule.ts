import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { ScheduleViewModel, CreateScheduleModel } from "@/models/schedule";
import { Schedule } from "@prisma/client";


export function ConverterScheduleModelToViewModel(model: Schedule & {
    classroom: any;
    class: any;
    event: any;
    attendances: any[];
}): ScheduleViewModel {
    return {
        id: model.id,
        classroomId: model.classroomId.toString(),
        classId: model.classId?.toString(),
        eventId: model.eventId?.toString(),
        dayOfWeek: model.dayOfWeek,
        startTime: model.startTime,
        endTime: model.endTime,
        description: model.description.toString(),

        classroom: model.classroom,
        class: model.class,
        event: model.event,
        attendances: model.attendances,
    };
}


export function ConverterScheduleInputToScheduleModel(input: CreateScheduleModel, type: string): Partial<any> {
    return {
        classroomId: Number(input.classroomId),
        classId: Number(input.classId),
        eventId: Number(input.eventId),
        dayOfWeek: input.dayOfWeek,
        startTime: input.startTime,
        endTime: input.endTime,
        description: input.description.toString(),
    };
}
