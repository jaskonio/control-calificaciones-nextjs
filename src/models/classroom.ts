import { Classroom, Schedule } from "@prisma/client";

export type CreateClassRoomModel = Omit<Classroom, 'id'> & {
}

export type ClassRoomViewModel = CreateClassRoomModel & {
    id: number;

    schedules: Schedule[];
}