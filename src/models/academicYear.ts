import { AcademicYearStatus, Course, Student, Event } from '@prisma/client';

// Model to Create
export interface CreateAcademicYearModel {
  name: string;
  startDate: string; // 'yyyy-MM-dd'
  endDate: string;   // 'yyyy-MM-dd'
  status: AcademicYearStatus;
}

// Model to Update
export interface UpdateAcademicYearModel {
  name: string;
  startDate: string; // 'yyyy-MM-dd'
  endDate: string;   // 'yyyy-MM-dd'
  status: AcademicYearStatus;
}

// Model To View
export interface AcademicYearViewModel {
  id: number;
  name: string;
  status: AcademicYearStatus;
  startDate: string; // 'yyyy-MM-dd'
  endDate: string;   // 'yyyy-MM-dd'
  courses: Course[];
  students: Student[];
  events: Event[];
}
