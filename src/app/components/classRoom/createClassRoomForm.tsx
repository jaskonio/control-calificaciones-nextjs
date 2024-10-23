"use client"

import { addClassRoom } from "@/actions/classRoomActions";
import { GenericCardForm } from "../ui/form"
import ClassRoomFields from "./classRoomFields";
import ClassRoomSchema from "./classRoomSchema";


export default function CreateClassRoomForm() {
    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addClassRoom(data)
    };

    return (
        <GenericCardForm
            title="Añadir nueva aula"
            fields={ClassRoomFields}
            onSubmit={handleSubmit}
            schema={ClassRoomSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}