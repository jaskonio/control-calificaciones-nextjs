"use client"

import { addSchoolYear } from "@/actions/schoolActions";
import { GenericCardForm } from "../ui/form"
import SchoolFields from "./schoolFields";
import SchoolSchema from "./schoolSchema";

export default function CreateSchoolForm() {
    const handleCreateUser = (data: any) => {
        console.log("Datos del formulario:", data);
        addSchoolYear(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nueva Clase"
            fields={SchoolFields}
            onSubmit={handleCreateUser}
            schema={SchoolSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}