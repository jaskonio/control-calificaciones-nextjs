'use server';

import { teacherService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/teachers'


export async function addTeacher(data: any) {
  console.log('Añadiendo Profesor')

  await teacherService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateTeacher(id: number, data: any) {
  console.log('Actualizando Profesor')

  await teacherService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteTeacher(id: number) {
  console.log(`Eliminando Profesor: ${id}`)

  await teacherService.delete(id)

  revalidatePath(base_path)
}
