'use server';

import { studentService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/students'


export async function addStudent(data: any) {
  console.log('Añadiendo Estudiante')

  await studentService.create(data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateStudent(id: number, data: any) {
  console.log('Actualizando Estudiante')

  await studentService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteStudent(id: number) {
  console.log(`Eliminando Estudiante: ${id}`)

  await studentService.delete(id)

  revalidatePath(base_path)
}