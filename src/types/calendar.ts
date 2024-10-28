export interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  type: "class" | "extracurricular" | "meeting" | "workshop" | "other";
}

export interface EntityCalendarEvents {
  entityId: number;
  entityName: string;
  events: CalendarEvent[];
}