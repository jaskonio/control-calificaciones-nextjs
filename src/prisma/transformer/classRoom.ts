import { ClassRoomViewModel, CreateClassRoomModel } from "@/models/classroom";
import { Classroom } from "@prisma/client";


export function ConverterClassRoomModelToViewModel(model: Classroom & {
    schedule: any[];
}): ClassRoomViewModel {
    return {
        id: model.id,
        name: model.name,
        capacity: model.capacity,

        schedules: model.schedule
    };
}


export function ConverterClassRoomInputToClassRoomModel(input: CreateClassRoomModel, type: string): Partial<any> {
    return {
        name: input.name,
        capacity: input.capacity
    };
}
