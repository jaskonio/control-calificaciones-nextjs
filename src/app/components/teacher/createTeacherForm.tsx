"use client"

import { addTeacher } from "@/actions/teacherActions";
import { GenericCardForm } from "../ui/form"
import TeacherFields from "./teacherFields";
import TeacherSchema from "./teacherSchema";

export default function CreateTeacherForm() {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        addTeacher(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nuevo Profesor"
            fields={TeacherFields}
            onSubmit={handleCreateUser}
            schema={TeacherSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}