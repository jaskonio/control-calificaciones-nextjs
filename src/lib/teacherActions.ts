"use server";

import { State, Teacher } from "./definition"
import { z } from 'zod'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const teacherSchema = z.object({
    id: z.string(),
    username: z.string({
      invalid_type_error: 'Por favor escribre un nombre de usuario.',
    }),
    password: z.string({
        invalid_type_error: 'Por favor escribre la contraseña.',
    }),
    firstName: z.string({
        invalid_type_error: 'Por favor escribre el nombre.',
    }),
    lastName: z.string({
        invalid_type_error: 'Por favor escribre el apellido',
    }),
    birthDate: z.string({
        invalid_type_error: 'Por favor seleciona una fecha.',
    })
})

export async function fetchAllTeacher() {
    try {
        const response = await fetch(process.env.URL + '/api/teacher', {method: 'GET'})
        const data = await response.json()

        return data as Teacher[]
    }
    catch (error) {
        console.log(error)
    }

    return []
}

export async function fetchTeacherById(id:string) {
    try {
        const response = await fetch(`${process.env.URL}/api/teacher/${id}`, {method: 'GET'})
        const data = await response.json()

        return data as Teacher
    }
    catch (error) {
        console.log(error)
    }

    return null
}

export async function createTeacher(data:Teacher) {
    try {
        const response = await fetch(process.env.URL + `/api/teacher`, 
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
        const result = await response.json()

        return result
    }
    catch (error) {
        console.log(error)
    }

    return null
}

export async function deleteTeacher(teacherId:string) {
    try {
        const response = await fetch(process.env.URL + `/api/teacher/${teacherId}`, {method: 'DELETE'})
        const data = await response.json()

        return data as Teacher[]
    }
    catch (error) {
        console.log(error)
    }

    return []
}

const CreateTeacher = teacherSchema.omit({ id: true });

export async function onSubmitCreateTeacher(prevState: State, formData: FormData) {
    console.log(formData)

    const validatedFields = CreateTeacher.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campo por rellenar.',
        };
    }
    
    try {
        const { username, password, firstName, lastName, birthDate} = CreateTeacher.parse({
            username: formData.get('username'),
            password: formData.get('password'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            birthDate: formData.get('birthDate')
        });

        const result = await createTeacher({ username, password, firstName, lastName, birthDate});
        console.log("result", result);
    } 
    catch (error) {
        return {
            message: 'API ERROR: Error al crear el Profesor.',
          };
    }

    revalidatePath('/teacher');
    redirect('/teacher');
}