"use client"

import { addStudent } from "@/actions/studentsActions";
import { GenericCardForm } from "../ui/form"
import StudentFields from "./studentFields";
import StudentSchema from "./studentSchema";

export default function CreateStudentForm() {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        addStudent(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nuevo Estudiante"
            fields={StudentFields}
            onSubmit={handleCreateUser}
            schema={StudentSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}