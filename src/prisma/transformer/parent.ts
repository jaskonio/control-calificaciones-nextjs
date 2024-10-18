import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { CreateParentModel, ParentViewModel } from "@/models/parent";
import { Parent } from "@prisma/client";


export function ConverterParentToViewModel(model: Parent & {
    user: any;
    student: any;
}): ParentViewModel {
    return {
        id: model.id,
        userId: model.userId,
        address: model.address,
        phone: model.phone,
        email: model.email,
        studentId: model.stuentId,

        user: model.user,
        student: model.student
    };
}

export function ConverterParentInputToModel(input: CreateParentModel, type: string): Partial<Parent> {
    return {
        userId: input.userId,
        address: input.address,
        phone: input.phone,
        email: input.email,
        studentId: input.studentId
    };
}
