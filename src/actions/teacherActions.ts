'use server';

import { teacherService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/teachers'


export async function addTeacher(formData: FormData) {
  console.log('Añadiendo Profesor:', Object.fromEntries(formData))

  let role = formData.get('role') as UserRole
  let name = formData.get('name') as string
  let email = formData.get('email') as string
  let password = formData.get('password') as string

  let firstName = formData.get('first_name') as string
  let lastName = formData.get('last_name') as string

  await teacherService.add(role, name, email, password, firstName, lastName)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateTeacher(formData: FormData) {
  console.log('Actualizando Profesor:', Object.fromEntries(formData))

  const updateTeacher:TeacherView = {
    teacher_id: Number(formData.get('teacher_id')),
    user_id: Number(formData.get('user_id')),
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    user: {
      role: formData.get('role') as UserRole,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    } as User
  };

  await teacherService.update(updateTeacher.teacher_id, updateTeacher)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteTeacher(id: number) {
  console.log(`Eliminando Profesor: ${id}`)

  await teacherService.delete(Number(id))

  revalidatePath(base_path)
}