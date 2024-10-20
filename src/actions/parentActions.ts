'use server';

import { parentService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/parents'


export async function addParent(data: any) {
  logger.info(`Añadiendo Parent`)

  await parentService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateParent(id: number, data: any) {
  logger.info(`Actualizando Parent: ${id}`)

  await parentService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteParent(id: number) {
  logger.info(`Eliminando Parent: ${id}`)

  await parentService.delete(id)

  revalidatePath(base_path)
}