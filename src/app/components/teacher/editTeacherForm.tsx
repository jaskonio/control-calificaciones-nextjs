"use client"

import { updateTeacher } from "@/actions/teacherActions";
import { GenericCardForm } from "../ui/form"
import TeacherFields from "./teacherFields";
import TeacherSchema from "./teacherSchema";

export default function EditTeacherForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        updateTeacher(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Profesor"
            fields={TeacherFields}
            onSubmit={handleCreateUser}
            schema={TeacherSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}