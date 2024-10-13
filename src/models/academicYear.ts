import { Course, Student, Event, AcademicYear } from '@prisma/client';


type rewriteProperties = {
  startDate: string;
  endDate: string
}

export type CreateAcademicYearModel = Omit<AcademicYear, 'id' | 'startDate' | 'endDate'> & rewriteProperties

export type UpdateAcademicYearModel = CreateAcademicYearModel

export type AcademicYearViewModel = CreateAcademicYearModel & {
  id: number;

  courses: Course[];
  students: Student[];
  events: Event[];
}
