"use client"

import { updateParent } from "@/actions/parentActions";
import { GenericCardForm } from "../ui/form"
import ParentFields from "./parentFields";
import ParentSchema from "./parentSchema";

export default function EditParentForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateParent(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Padre"
            fields={ParentFields}
            onSubmit={handleOnSubmit}
            schema={ParentSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}