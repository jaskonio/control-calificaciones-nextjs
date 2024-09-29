'use server';

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { teacherService } from './services';


export async function addTeacher(formData: FormData) {
  console.log('Añadiendo Profesor:', Object.fromEntries(formData))

  let role = formData.get('role') as UserRole
  let name = formData.get('name') as string
  let email = formData.get('email') as string
  let password = formData.get('password') as string

  teacherService.add(role, name, email, password)

  revalidatePath('/teachers')
  redirect('/teachers')
}

export async function updateTeacher(formData: FormData) {
  console.log('Actualizando Profesor:', Object.fromEntries(formData))

  const updateTeacher:TeacherView = {
    teacher_id: Number(formData.get('teacher_id')),
    user_id: Number(formData.get('user_id')),
    user: {
      role: formData.get('role') as UserRole,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    } as User
  };

  teacherService.update(updateTeacher.teacher_id, updateTeacher)

  revalidatePath('/teachers')
  redirect('/teachers')
}

export async function deleteTeacher(formData: FormData) {
  const teafcherId = formData.get('teacher_id')
  console.log('Eliminando Profesor:', teafcherId)

  teacherService.delete(Number(teafcherId))

  revalidatePath('/teachers')
}