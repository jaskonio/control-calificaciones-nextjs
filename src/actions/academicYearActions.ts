'use server';

import { schoolService } from '@/services'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/school'


export async function addSchoolYear(data: any) {
  console.log('Añadiendo año escolar')

  await schoolService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateSchoolYear(id: number, data: any) {
  console.log('Actualizando año escolar')

  await schoolService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteSchoolYear(id: number) {
  console.log(`Eliminando año escolar: ${id}`)

  await schoolService.delete(Number(id))

  revalidatePath(base_path)
}