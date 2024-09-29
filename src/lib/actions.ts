'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { deleteSchoolYearById } from './data'

export async function addSchoolYear(formData: FormData) {
  console.log('Añadiendo año escolar:', Object.fromEntries(formData))
  revalidatePath('/school')
  redirect('/school')
}

export async function updateSchoolYear(formData: FormData) {
  // En una aplicación real, aquí se actualizaría en la base de datos
  console.log('Actualizando año escolar:', Object.fromEntries(formData))
  revalidatePath('/school')
  redirect('/school')
}

export async function deleteSchoolYear(formData: FormData) {
  const year_id = formData.get('year_id')
  // En una aplicación real, aquí se eliminaría de la base de datos
  console.log('Eliminando año escolar:', year_id)
  deleteSchoolYearById(Number(year_id))

  revalidatePath('/school')
}