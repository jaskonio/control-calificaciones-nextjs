'use server';

import { classService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/class'


export async function addCourse(data: any) {
  logger.info(`Añadiendo Clase`)

  await classService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateCourse(id: number, data: any) {
  logger.info(`Actualizando Clase: ${id}`)

  await classService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteCourse(id: number) {
  logger.info(`Eliminando Clase: ${id}`)

  await classService.delete(id)

  revalidatePath(base_path)
}