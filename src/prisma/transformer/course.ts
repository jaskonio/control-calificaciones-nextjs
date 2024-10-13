import { CourseViewModel, CreateCourseModel } from "@/models/course";
import { Course } from "@prisma/client";


export function ConverterCourseToViewModel(model: Course & {
    academicYear: any;
    classes: any[];
}): CourseViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        academicYearId: model.academicYearId,
        gradeLevel: model.gradeLevel,
        status: model.status,

        academicYear: model.academicYear,
        classes: model.classes
    };
}


export function ConverterCourseInputToModel(input: CreateCourseModel): Partial<Course> {
    return {
        name: input.name,
        description: input.description,
        academicYearId: input.academicYearId,
        gradeLevel: input.gradeLevel,
        status: input.status
    };
}
