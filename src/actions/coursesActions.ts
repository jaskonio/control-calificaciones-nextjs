'use server';

import { coursesService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/courses'


export async function addCourse(data: CourseView) {
  console.log('Añadiendo Clase:', data)

  await coursesService.add(data.name, data.parallel)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateCourse(data: CourseView) {
  console.log('Actualizando Clase:', data.course_id)

  await coursesService.update(data.course_id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteCourse(formData: FormData) {
  const id = formData.get('course_id')
  console.log('Eliminando Clase:', id)

  await coursesService.delete(Number(id))

  revalidatePath(base_path)
}