'use server';

import { scheduleService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/Schedule'


export async function addSchedule(data: any) {
  logger.info(`Añadiendo Horario`)

  await scheduleService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateSchedule(id: number, data: any) {
  logger.info(`Actualizando Horario: ${id}`)

  await scheduleService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteSchedule(id: number) {
  logger.info(`Eliminando Horario: ${id}`)

  await scheduleService.delete(id)

  revalidatePath(base_path)
}