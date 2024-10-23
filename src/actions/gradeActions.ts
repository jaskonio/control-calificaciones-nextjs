'use server';

import { gradeService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/grade'


export async function addGrade(data: any) {
  logger.info(`Añadiendo Nota`)

  await gradeService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateGrade(id: number, data: any) {
  logger.info(`Actualizando Nota: ${id}`)

  await gradeService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteGrade(id: number) {
  logger.info(`Eliminando Nota: ${id}`)

  await gradeService.delete(id)

  revalidatePath(base_path)
}