"use client"

import { addSubjects } from "@/actions/subjectsActions";
import { GenericCardForm } from "../ui/form"
import subjectFields from "./subjectFields";
import subjectSchema from "./subjectSchema";

export default function CreateSubjectForm() {
    const handleCreate = (data: any) => {
        console.log("Datos del formulario:", data);
        addSubjects(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nueva Asignatura"
            fields={subjectFields}
            onSubmit={handleCreate}
            schema={subjectSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}