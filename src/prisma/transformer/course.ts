import { CreateCourseModel, CourseViewModel } from "@/models/course";
import { Course } from "@prisma/client";
import { EntityAcedemicYear } from "./academicYear";

export type EntityCourse = Course & {
    academicYear?: EntityAcedemicYear;
    class?: any[];
}

export function ConverterCourseToViewModel(model: EntityCourse): CourseViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        academicYearId: model.academicYearId.toString(),
        gradeLevel: model.gradeLevel,
        status: model.status,

        academicYear: model.academicYear as EntityAcedemicYear,
        class: model.class as any[]
    };
}


export function ConverterCourseInputToModel(input: CreateCourseModel, type: string): Partial<any> {
    return {
        name: input.name,
        description: input.description,
        academicYearId: Number(input.academicYearId),
        gradeLevel: input.gradeLevel,
        status: input.status
    };
}
