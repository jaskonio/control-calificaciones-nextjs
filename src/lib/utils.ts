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
export function updateOptionFields({options, fields}: updateOptionFields) {
  const fieldsUpdated = fields.map( f => {
    if (Object.keys(options).includes(f.name)) {
      f.options = options[f.name]
    }

    return f
  })

  return fieldsUpdated
}