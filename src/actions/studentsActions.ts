'use server';

import { studentService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/admin/students'


export async function addStudent(formData: FormData) {
  console.log('Añadiendo Estudiante:', Object.fromEntries(formData))

  let role = formData.get('role') as UserRole
  let name = formData.get('name') as string
  let email = formData.get('email') as string
  let password = formData.get('password') as string

  let firstName = formData.get('first_name') as string
  let lastName = formData.get('last_name') as string
  let birth_date = formData.get('birth_data') as string

  await studentService.add(role, name, email, password, firstName, lastName, birth_date)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function updateStudent(formData: FormData) {
  console.log('Actualizando Estudiante:', Object.fromEntries(formData))

  const modelViewUpdated:StudentView = {
    student_id: Number(formData.get('student_id')),
    user_id: Number(formData.get('user_id')),
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    birth_data: formData.get('birth_data') as string,
    user: {
      role: formData.get('role') as UserRole,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    } as User
  };

  await studentService.update(modelViewUpdated.student_id, modelViewUpdated)

  revalidatePath(base_path)
  redirect(base_path)
}

export async function deleteStudent(formData: FormData) {
  const id = formData.get('student_id')
  console.log('Eliminando Estudiante:', id)

  await studentService.delete(Number(id))

  revalidatePath(base_path)
}