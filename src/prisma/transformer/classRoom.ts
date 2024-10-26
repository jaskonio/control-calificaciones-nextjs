import { ClassRoomViewModel, CreateClassRoomModel } from "@/models/classroom";
import { Classroom, Event } from "@prisma/client";


export function ConverterClassRoomModelToViewModel(model: Classroom & {
    events: Event[];
}): ClassRoomViewModel {
    return {
        id: model.id,
        name: model.name,
        capacity: model.capacity,

        events: model.events
    };
}


export function ConverterClassRoomInputToClassRoomModel(input: CreateClassRoomModel, type: string): Partial<any> {
    return {
        name: input.name,
        capacity: input.capacity
    };
}
