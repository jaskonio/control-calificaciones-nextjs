import { FieldConfig, SelectOption } from "@/app/components/ui/form";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateToString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0, por eso sumamos 1
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function parseStringToDate(dateString: string): Date {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Fecha inválida: ${dateString}`);
  }
  return date;
}

type updateOptionFields = {
  options: { [key: string]: SelectOption[] },
  fields: FieldConfig[]
}
export function updateOptionFields({ options, fields }: updateOptionFields) {
  const fieldsUpdated = fields.map(f => {
    if (Object.keys(options).includes(f.name)) {
      f.options = options[f.name]
    }

    return f
  })

  return fieldsUpdated
}

export function generateTimeRange(startTime: string, endTime: string, intervalMinutes: number = 15): string[] {
  const range: string[] = [];

  // Convert start and end times to minutes
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  let startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // Generate time intervals
  while (startTotalMinutes <= endTotalMinutes) {
    const hours = Math.floor(startTotalMinutes / 60).toString().padStart(2, '0');
    const minutes = (startTotalMinutes % 60).toString().padStart(2, '0');
    range.push(`${hours}:${minutes}`);
    startTotalMinutes += intervalMinutes;
  }

  return range;
}

export function compareTimes(time1: string, time2: string): number {
  // return 1 time1 is greater than time2
  // return -1 time1 is less than time2
  // return 0 time1 is equal to time2

  const [hour1, minute1] = time1.split(':').map(Number);
  const [hour2, minute2] = time2.split(':').map(Number);

  const totalMinutes1 = hour1 * 60 + minute1;
  const totalMinutes2 = hour2 * 60 + minute2;

  if (totalMinutes1 > totalMinutes2) {
    return 1;
  } else if (totalMinutes1 < totalMinutes2) {
    return -1;
  } else {
    return 0;
  }
}

export function isTimeGreater(time1: string, time2: string): boolean {
  return compareTimes(time1, time2) === 1;
}