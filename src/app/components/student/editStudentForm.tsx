"use client"

import { updateStudent } from "@/actions/studentsActions";
import { GenericCardForm } from "../ui/form"
import StudentFields from "./studentFields";
import StudentSchema from "./studentSchema";

export default function EditStudentForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        updateStudent(id, data)
    };
    return (
        <GenericCardForm
            title="Añadir Nuevo Estudiante"
            fields={StudentFields}
            onSubmit={handleCreateUser}
            schema={StudentSchema}
            defaultValues={defaultValues}
            submitButtonText="Añadir"></GenericCardForm>
    )
}