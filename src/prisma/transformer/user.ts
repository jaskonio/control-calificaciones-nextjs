import { CreateUserModel, UserViewModel } from "@/models/user";
import { User } from "@prisma/client";
import { ConverterTeacherToViewModel } from "./teacher";
import { ConverterParentToViewModel } from "./parent";
import { ConverterStudentToViewModel } from "./student";


export function ConverterUserToViewModel(model: User & {
    student?: any;
    teacher?: any;
    parent?: any;
}): UserViewModel {
    let data: UserViewModel = {
        id: model.id,

        name: model.name,
        email: model.email,
        password: model.password,
        role: model.role,
        createdAt: model.createdAt,
        status: model.status
    };

    if (model.student) {
        data.student = ConverterStudentToViewModel(model.student)
    }

    if (model.teacher) {
        data.teacher = ConverterTeacherToViewModel(model.student)
    }

    if (model.parent) {
        data.parent = ConverterParentToViewModel(model.parent)
    }

    return data
}

export function ConverterUserInputToModel(input: CreateUserModel, type: string): Partial<any> {
    return {
        name: input.name,
        password: input.password,
        email: input.email,
        status: input.status,
        role: input.role
    };
}
