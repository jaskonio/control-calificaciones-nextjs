'use server';

import { subjectsService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/subjects'


export async function addSubjects(formData: FormData) {
  console.log('Añadiendo Asignatura:', Object.fromEntries(formData))

  let name = formData.get('name') as string
  let description = formData.get('description') as string

  await subjectsService.add(name, description)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateSubjects(formData: FormData) {
  console.log('Actualizando Asignatura:', Object.fromEntries(formData))

  const modelViewUpdated: SubjectView = {
    subject_id: Number(formData.get('subject_id')),
    name: formData.get('name') as string,
    description: formData.get('description') as string,
  };

  await subjectsService.update(modelViewUpdated.subject_id, modelViewUpdated)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteSubjects(formData: FormData) {
  const id = formData.get('subject_id')
  console.log('Eliminando Asignatura:', id)

  await subjectsService.delete(Number(id))

  revalidatePath(base_path)
}