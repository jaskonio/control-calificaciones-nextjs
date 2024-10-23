'use server';

import { settingService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/setting'


export async function addSetting(data: any) {
  logger.info(`Añadiendo Setting`)

  await settingService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateSetting(id: number, data: any) {
  logger.info(`Actualizando Setting: ${id}`)

  await settingService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteSetting(id: number) {
  logger.info(`Eliminando Setting: ${id}`)

  await settingService.delete(id)

  revalidatePath(base_path)
}