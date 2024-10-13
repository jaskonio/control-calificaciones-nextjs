import { AcademicYear, Class, CourseStatus } from "@prisma/client";


export interface CreateCourseModel {
  name: string;
  description: string;
  academicYearId: number;  
  gradeLevel: string;
  status: CourseStatus
}

export interface UpdateCourseModel extends CreateCourseModel{
}

export interface CourseViewModel {
  id: number;
  name: string;
  description: string;
  academicYearId: number;
  gradeLevel: string;
  status: CourseStatus;

  academicYear: AcademicYear[];
  classes: Class[];
}