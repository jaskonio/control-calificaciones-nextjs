import { CourseViewModel, CreateCourseModel } from "@/models/courses";
import { Course, CourseStatus } from "@prisma/client";


export function transformCourseToViewModel(model: Course & {
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


export function transformCourseInputToPrismaData(input: {
    name: string;
    description: string;
    academicYearId: number;
    gradeLevel: string;
    status: CourseStatus;
}): CreateCourseModel {
    return {
        name: input.name,
        description: input.description,
        academicYearId: input.academicYearId,
        gradeLevel: input.gradeLevel,
        status: input.status
    };
}
