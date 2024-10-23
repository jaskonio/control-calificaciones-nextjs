'use server';

import { classRoomService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/classroom'


export async function addClassRoom(data: any) {
  logger.info(`Añadiendo Aula`)

  await classRoomService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateClassRoom(id: number, data: any) {
  logger.info(`Actualizando Aula: ${id}`)

  await classRoomService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteClassRoom(id: number) {
  logger.info(`Eliminando Aula: ${id}`)

  await classRoomService.delete(id)

  revalidatePath(base_path)
}