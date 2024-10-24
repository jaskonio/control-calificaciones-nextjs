'use server';

import { userService } from '@/services';
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const base_path = '/settings'


export async function updateUser(id: number, data: any) {
  console.log('Actualizando user')

  await userService.update(id, data)

  revalidatePath(base_path)
  redirect(base_path)
}