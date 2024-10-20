import { AcademicYear, ClassSubject, Course } from "@prisma/client";


export type CreateCourseModel = Omit<Course, 'id'| 'academicYearId'> & {
  academicYearId: string;
}

export type CourseViewModel = Omit<CreateCourseModel, 'academicYearId'> & {
  id: number;
  academicYearId: string;

  academicYear: AcademicYear[];
  classes: ClassSubject[];
}