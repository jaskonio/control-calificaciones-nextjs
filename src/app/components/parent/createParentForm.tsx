"use client"

import { addParent } from "@/actions/parentActions";
import { GenericCardForm } from "../ui/form"
import ParentFields from "./parentFields";
import ParentSchema from "./parentSchema";

export default function CreateParentForm() {
    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addParent(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nuevo Padre"
            fields={ParentFields}
            onSubmit={handleSubmit}
            schema={ParentSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}