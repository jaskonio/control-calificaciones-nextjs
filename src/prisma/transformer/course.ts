import { CreateCourseModel, CourseViewModel } from "@/models/course";
import { Course } from "@prisma/client";


export function ConverterCourseToViewModel(model: Course & {
    academicYear: any;
    class: any[];
}): CourseViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        academicYearId: model.academicYearId.toString(),
        gradeLevel: model.gradeLevel,
        status: model.status,

        academicYear: model.academicYear,
        class: model.class
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
