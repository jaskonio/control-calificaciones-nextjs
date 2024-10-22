import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { EventViewModel, CreateEventModel } from "@/models/event";
import { Event } from "@prisma/client";


export function ConverterEventModelToViewModel(model: Event & {
    academicYear: any;
    schedule: any[];
}): EventViewModel {
    return {
        id: model.id,
        academicYearId: model.academicYearId.toString(),
        scheduleId: model.scheduleId.toString(),
        title: model.title,
        description: model.description,
        date: formatDateToString(model.date),
        eventType: model.eventType,

        academicYear: model.academicYear,
        schedule: model.schedule,
    };
}


export function ConverterEventInputToEventModel(input: CreateEventModel, type: string): Partial<any> {
    return {
        academicYearId: input.academicYearId.toString(),
        scheduleId: input.scheduleId.toString(),
        title: input.title,
        description: input.description,
        date: parseStringToDate(input.date),
        eventType: input.eventType,
    };
}
