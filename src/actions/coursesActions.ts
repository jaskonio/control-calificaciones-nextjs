'use server';

import { coursesService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/courses'


export async function addCourse(data: any) {
  logger.info(`Añadiendo Clase`)

  await coursesService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateCourse(id: number, data: any) {
  logger.info(`Actualizando Clase: ${id}`)

  await coursesService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteCourse(id: number) {
  logger.info(`Eliminando Clase: ${id}`)

  await coursesService.delete(id)

  revalidatePath(base_path)
}