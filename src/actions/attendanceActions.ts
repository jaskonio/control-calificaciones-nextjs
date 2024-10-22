'use server';

import { attendanceService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { logger } from "@/logger";


const base_path = '/admin/attendance'


export async function addAttendance(data: any) {
  logger.info(`Añadiendo Asistencia`)

  await attendanceService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateAttendance(id: number, data: any) {
  logger.info(`Actualizando Asistencia: ${id}`)

  await attendanceService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteAttendance(id: number) {
  logger.info(`Eliminando Asistencia: ${id}`)

  await attendanceService.delete(id)

  revalidatePath(base_path)
}