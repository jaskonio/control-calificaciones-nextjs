"use server";

import { Teacher } from "./definition"

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
