"use server";

import { State, Teacher } from "./definition"
import { z } from 'zod'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const teacherSchema = z.object({
    id: z.string(),
    username: z.string({
      invalid_type_error: 'Por favor escribre un nombre de usuario.',
    }).max(255, {message:'El Username no puede superar los 255 caracteres.'}),
    password: z.string({
        invalid_type_error: 'Por favor escribre la contraseña.',
    }).max(255, {message:'La contraseña no puede superar los 255 caracteres.'}),
    firstName: z.string({
        invalid_type_error: 'Por favor escribre el nombre.',
    }).max(255, {message:'El nombre no puede superar los 255 caracteres.'}),
    lastName: z.string({
        invalid_type_error: 'Por favor escribre el apellido',
    }).max(255, {message:'El apellido no puede superar los 255 caracteres.'}),
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
    console.log('fetchTeacherById');

    try {
        const response = await fetch(`${process.env.URL}/api/teacher/${id}`, {method: 'GET', next: { revalidate: 0 }})
        const data = await response.json()

        const newDate = new Date(data.birthDate)
        data.birthDate = newDate.toLocaleDateString('es-ES', {year: "numeric", month: "2-digit", day:"2-digit"});
        
        return data as Teacher
    }
    catch (error) {
        console.log(error)
    }

    return null
}

export async function fetchCreateTeacher(data:Teacher) {
    console.log('createTeacher');

    try {
        const response = await fetch(process.env.URL + `/api/teacher`, 
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
        const result = await response.json()
        
        if (result== null) {
            return 'error'
        }
    
        return result
    }
    catch (error) {
        console.log(error)
    }
}

export async function fetchDeleteTeacher(teacherId:string) {
    try {
        const response = await fetch(process.env.URL + `/api/teacher/${teacherId}`, {method: 'DELETE'})
        revalidatePath('/teacher');
    }
    catch (error) {
        console.log(error)
    }
}

export async function fetchUpdateTeacher(data:Teacher) {
    console.log('updateTeacher');

    try {
        const response = await fetch(`${process.env.URL}/api/teacher/${data.id}`,
        {
            method: 'PUT',
            body: JSON.stringify(data)
        })
    
        const result = await response.json()
        
        if (result== null) {
            return 'error'
        }
    
        return result
    }
    catch (error) {
        console.log(error)
    }
}
const CreateTeacher = teacherSchema.omit({ id: true });

export async function onSubmitCreateOrUpdateTeacher(prevState: any, formData: FormData) {
    console.log('onSubmitCreateOrUpdateTeacher');
    console.log(formData);

    const teacherId = formData.get('id')?.toString();
    console.log('teacherId: ', teacherId)


    const validatedFields = CreateTeacher.safeParse({
        id: formData.get('id'),
        username: formData.get('username'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate')
    });

    if (!validatedFields.success) {
        console.log('Hay errores en el formulario.');
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Faltan campo por rellenar.',
        };
    }

    const { username, password, firstName, lastName, birthDate} = CreateTeacher.parse({
        username: formData.get('username'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate')
    });

    try {
        let result = {}

        if (teacherId != undefined && teacherId == '') {
            result = await fetchCreateTeacher({ username, password, firstName, lastName, birthDate});
        } else {
            result = await fetchUpdateTeacher({id:teacherId, username, password, firstName, lastName, birthDate});
        }
    
        console.log("result", result);

        if (result == undefined) {
            return {
                message: 'API ERROR: Error al crear el Profesor.',
              };
        }
    } 
    catch (error) {
        return {
            message: 'API ERROR: Error al crear el Profesor.',
          };
    }

    revalidatePath('/teacher');
    redirect('/teacher');
}