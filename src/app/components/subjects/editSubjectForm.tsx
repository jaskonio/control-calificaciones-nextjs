"use client"

import { updateSubjects } from "@/actions/subjectsActions";
import { GenericCardForm } from "../ui/form"
import SubjectFields from "./subjectFields";
import SubjectSchema from "./subjectSchema";

export default function EditSubjectForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        updateSubjects(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Estudiante"
            fields={SubjectFields}
            onSubmit={handleCreateUser}
            schema={SubjectSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}