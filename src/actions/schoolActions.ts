'use server';

import { schoolService } from '@/services'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function addSchoolYear(formData: FormData) {
  console.log('Añadiendo año escolar:', Object.fromEntries(formData))

  let start_date = formData.get('start_date') as string
  let end_date = formData.get('end_date') as string

  await schoolService.add(start_date, end_date)

  revalidatePath('/school')
  redirect('/school')
}

export async function updateSchoolYear(formData: FormData) {
  console.log('Actualizando año escolar:', Object.fromEntries(formData))

  const updateSchoolYear = {
    year_id: Number(formData.get('year_id')),
    start_date: formData.get('start_date') as string,
    end_date: formData.get('end_date') as string,
  };

  await schoolService.update(updateSchoolYear.year_id, updateSchoolYear)

  revalidatePath('/school')
  redirect('/school')
}

export async function deleteSchoolYear(formData: FormData) {
  const year_id = formData.get('year_id')
  console.log('Eliminando año escolar:', year_id)

  await schoolService.delete(Number(year_id))

  revalidatePath('/school')
}