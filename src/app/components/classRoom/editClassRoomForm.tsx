"use client"

import { updateClassRoom } from "@/actions/classRoomActions";
import { GenericCardForm } from "../ui/form"
import ClassRoomFields from "./classRoomFields";
import ClassRoomSchema from "./classRoomSchema";


export default function EditClassRoomForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateClassRoom(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Clase"
            fields={ClassRoomFields}
            onSubmit={handleOnSubmit}
            schema={ClassRoomSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}