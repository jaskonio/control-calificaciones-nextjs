import { AcademicYear, Class, Course } from "@prisma/client";


export type CreateCourseModel = Omit<Course, 'id'>

export type UpdateCourseModel = CreateCourseModel

export type CourseViewModel = CreateCourseModel & {
  id: number;

  academicYear: AcademicYear[];
  classes: Class[];
}