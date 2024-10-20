import { CreateParentModel, ParentViewModel } from "@/models/parent";
import { Parent, UserRole } from "@prisma/client";


export function ConverterParentToViewModel(model: Parent & {
    user: any;
    student: any;
}): ParentViewModel {
    return {
        id: model.id,

        name: model.user.name,
        password: model.user.password,
        email: model.user.email,
        status: model.user.status,

        userId: model.userId,
        address: model.address,
        phone: model.phone,

        user: model.user,
        student: model.student
    };
}

export function ConverterParentInputToModel(input: CreateParentModel, type: string): Partial<any> {
    let userModel = {}
    let userData = {
        name: input.name,
        password: input.password,
        email: input.email,
        status: input.status,
        role: UserRole.parent
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
        address: input.address,
        phone: input.phone,

        user: userModel
    };
}
