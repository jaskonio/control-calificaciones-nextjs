import { AcademicYear, Class, Course } from "@prisma/client";


export type CreateCourseModel = Omit<Course, 'id'>

export type UpdateCourseModel = CreateCourseModel

export type CourseInputModel = Omit<CreateCourseModel, 'academicYearId'> & {
  academicYearId: string;
}

export type CourseViewModel = Omit<CreateCourseModel, 'academicYearId'> & {
  id: number;
  academicYearId: string;

  academicYear: AcademicYear[];
  classes: Class[];
}