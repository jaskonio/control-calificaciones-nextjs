import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { CreateTeacherModel, TeacherViewModel } from "@/models/teacher";
import { Teacher, UserRole } from "@prisma/client";


export function ConverterTeacherToViewModel(model: Teacher & {
    user: any;
    class: any[];
}): TeacherViewModel {
    return {
        id: model.id,

        name: model.user.name,
        password: model.user.password,
        email: model.user.email,
        statusUser: model.user.status,
    
        userId: model.userId,
        expertise: model.expertise,
        phone: model.phone,
        address: model.address,
        hireDate: formatDateToString(model.hireDate),
        status: model.user.status,

        user: model.user,
        class: model.class
    };
}

export function ConverterTeacherInputToModel(input: CreateTeacherModel, type: string): Partial<any> {
    let userModel = {}
    let userData = {
        name: input.name,
        password: input.password,
        email: input.email,
        status: input.statusUser,
        role: UserRole.teacher
    }

    if (type == 'create') {
        userModel = {
            create: userData
        }
    } else if (type == 'update') {
        userModel = {
            update: userData
        }
    }

    return {
        userId: input.userId,
        expertise: input.expertise,
        phone: input.phone,
        address: input.address,
        hireDate: parseStringToDate(input.hireDate),
        status: input.status,

        user: userModel
    };
}
