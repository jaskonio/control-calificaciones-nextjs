import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { ScheduleViewModel, CreateScheduleModel } from "@/models/schedule";
import { Schedule, Event } from "@prisma/client";


export function ConverterScheduleModelToViewModel(model: Schedule & {
    event: Event;
}): ScheduleViewModel {
    return {
        id: model.id,
        eventId: model.eventId?.toString(),
        date: formatDateToString(model.date),
        startTime: model.startTime,
        endTime: model.endTime,
        label:  model.startTime + ' - ' +  model.endTime,
        description: model.description.toString(),

        event: model.event,
    };
}


export function ConverterScheduleInputToScheduleModel(input: CreateScheduleModel, type: string): Partial<any> {
    return {
        eventId: Number(input.eventId),
        date: parseStringToDate(input.date),
        startTime: input.startTime,
        endTime: input.endTime,
        description: input.description.toString(),
    };
}
