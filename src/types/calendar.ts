export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  type: "class" | "extracurricular" | "meeting" | "workshop" | "other";
}

export interface StudentsCalendarEvent {
  academicYearId: number;
  academicYearName: string;
  events: CalendarEvent[];
}