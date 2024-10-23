'use server';

import { eventService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/event'


export async function addEvent(data: any) {
  logger.info(`Añadiendo Evento`)

  await eventService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateEvent(id: number, data: any) {
  logger.info(`Actualizando Evento: ${id}`)

  await eventService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteEvent(id: number) {
  logger.info(`Eliminando Evento: ${id}`)

  await eventService.delete(id)

  revalidatePath(base_path)
}