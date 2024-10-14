import { formatDateToString, parseStringToDate } from "@/lib/utils";
import { CreateStudentModel, StudentViewModel } from "@/models/student";
import { Student } from "@prisma/client";


export function ConverterStudentToViewModel(model: Student & {
    user: any;
    academicYear: any;
    parents: any[];
    enrollments: any[];
}): StudentViewModel {
    return {
        id: model.id,
        userId: model.userId,
        birthDate: formatDateToString(model.birthDate),
        address: model.address,
        phone: model.phone,
        enrollmentDate: formatDateToString(model.enrollmentDate),
        gradeLevel: model.gradeLevel,
        academicYearId: model.academicYearId,

        user: model.user,
        academicYear: model.academicYear,
        parents: model.parents,
        enrollments: model.enrollments
    };
}

export function ConverterStudentInputToModel(input: CreateStudentModel): Partial<Student> {
    return {
        userId: input.userId,
        birthDate: parseStringToDate(input.birthDate),
        address: input.address,
        phone: input.phone,
        enrollmentDate: parseStringToDate(input.enrollmentDate),
        gradeLevel: input.gradeLevel,
        academicYearId: input.academicYearId,
    };
}
