'use server';

import { coursesService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/courses'


export async function addCourse(data: any) {
  console.log('Añadiendo Clase:', data)
  delete data['id']
  data['academicYearId'] = Number(data['academicYearId'])
  await coursesService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateCourse(data: any) {
  console.log('Actualizando Clase:', data.id)

  data['academicYearId'] = Number(data['academicYearId'])

  await coursesService.update({ id:data.id, data})

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteCourse(id: number) {
  console.log('Eliminando Clase:', id)

  await coursesService.delete(Number(id))

  revalidatePath(base_path)
}