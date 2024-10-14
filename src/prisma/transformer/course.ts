import { CourseInputModel, CourseViewModel } from "@/models/course";
import { Course } from "@prisma/client";


export function ConverterCourseToViewModel(model: Course & {
    academicYear: any;
    classes: any[];
}): CourseViewModel {
    return {
        id: model.id,
        name: model.name,
        description: model.description,
        academicYearId: model.academicYearId.toString(),
        gradeLevel: model.gradeLevel,
        status: model.status,

        academicYear: model.academicYear,
        classes: model.classes
    };
}


export function ConverterCourseInputToModel(input: CourseInputModel): Partial<Course> {
    return {
        name: input.name,
        description: input.description,
        academicYearId: Number(input.academicYearId),
        gradeLevel: input.gradeLevel,
        status: input.status
    };
}
