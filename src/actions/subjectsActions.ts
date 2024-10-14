'use server';

import { subjectsService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/subjects'


export async function addSubjects(data: any) {
  console.log('Añadiendo Asignatura')

  await subjectsService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateSubjects(id: number, data: any) {
  console.log('Actualizando Asignatura')

  await subjectsService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteSubjects(id: number) {
  console.log('Eliminando Asignatura:', id)

  await subjectsService.delete(id)

  revalidatePath(base_path)
}