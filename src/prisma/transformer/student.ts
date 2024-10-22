import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { CreateStudentModel, StudentViewModel } from "@/models/student";
import { Student, UserRole } from "@prisma/client";


export function ConverterStudentToViewModel(model: Student & {
    user: any;
    parents: any[];
    attendance: any[];
    grade: any[];
}): StudentViewModel {
    return {
        id: model.id,

        name: model.user.name,
        password: model.user.password,
        email: model.user.email,
        status: model.user.status,

        userId: model.userId,
        birthDate: formatDateToString(model.birthDate),
        address: model.address,
        phone: model.phone,
        enrollmentDate: formatDateToString(model.enrollmentDate),
        gradeLevel: model.gradeLevel,

        user: model.user,
        parents: model.parents,
        attendance: model.attendance,
        grade: model.grade
    };
}

export function ConverterStudentInputToModel(input: CreateStudentModel, type: string): Partial<any> {
    let userModel = {}

    if (type == 'create') {
        userModel = {
            create: {
                name: input.name,
                password: input.password,
                email: input.email,
                status: input.status,
                role: UserRole.student
            }
        }
    } else if (type == 'update') {
        userModel = {
            update: {
                name: input.name,
                password: input.password,
                email: input.email,
                status: input.status,
                role: UserRole.student
            }
        }
    }

    return {
        userId: input.userId,
        birthDate: parseStringToDate(input.birthDate),
        address: input.address,
        phone: input.phone,
        enrollmentDate: parseStringToDate(input.enrollmentDate),
        gradeLevel: input.gradeLevel,

        user: userModel
    };
}
