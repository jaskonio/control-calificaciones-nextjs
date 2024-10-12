import { AcademicYear, Class, CourseStatus } from "@prisma/client";

// Model to Create
export interface CreateCourseModel {
  name: string;
  description: string;
  academicYearId: number;  
  gradeLevel: string;
  status: CourseStatus
}

// Model to Update
export interface UpdateCourseModel extends CreateCourseModel{
}

// Model To View
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
