"use client"


import { GenericCardForm } from "../ui/form"
import SchoolFields from "./schoolFields";
import SchoolSchema from "./schoolSchema";


type CourseFormProps = {
    id: number,
    defaultValues: any,
}

export default function EditSchoolForm({ id, defaultValues }: CourseFormProps) {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
    };

    return (
        <GenericCardForm
            title="Añadir Nueva Clase"
            fields={SchoolFields}
            onSubmit={handleCreateUser}
            schema={SchoolSchema}
            defaultValues={defaultValues}
            submitButtonText="Añadir"></GenericCardForm>
    )
}