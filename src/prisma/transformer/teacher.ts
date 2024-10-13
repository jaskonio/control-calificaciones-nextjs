import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { CreateTeacherModel, TeacherViewModel } from "@/models/teacher";
import { Teacher } from "@prisma/client";


export function ConverterTeacherToViewModel(model: Teacher & {
    user: any;
    classes: any[];
}): TeacherViewModel {
    return {
        id: model.id,
        userId: model.userId,
        expertise: model.expertise,
        phone: model.phone,
        address: model.address,
        hireDate: formatDateToString(model.hireDate),
        status: model.status,

        user: model.user,
        classes: model.classes
    };
}

export function ConverterTeacherInputToModel(input: CreateTeacherModel): Partial<Teacher> {
    return {
        userId: input.userId,
        expertise: input.expertise,
        phone: input.phone,
        address: input.address,
        hireDate: parseStringToDate(input.hireDate),
        status: input.status
    };
}
