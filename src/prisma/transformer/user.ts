import { CreateUserModel, UserViewModel } from "@/models/user";
import { User } from "@prisma/client";


export function ConverterUserToViewModel(model: User & {
    student: any;
    teacher: any;
    parent: any;
}): UserViewModel {
    return {
        id: model.id,

        name: model.name,
        email: model.email,
        password: model.password,
        role: model.role,
        createdAt: model.createdAt,
        status: model.status,

        student: model.student,
        teacher: model.teacher,
        parent: model.parent
    };
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
