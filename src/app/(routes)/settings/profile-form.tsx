"use client"


import { updateUser } from "@/actions/userActions";
import { FieldConfig, FieldType, GenericForm } from "@/app/components/ui/form";
import { User } from "@prisma/client";
import { z } from "zod";


const Fields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Nombre",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Password,
        name: "password",
        label: "Password",
        placeholder: "Ingresa tu password",
    }
]

const Schema = z.object({
    name: z.string(),
    password: z.string(),
})

export default function ProfileForm({ id, data }: { id: number, data: User }) {
    const handle = (data: any) => {
        console.log("Datos del formulario:", data);
        updateUser(id, data)
    };

    return (
        <GenericForm
            fields={Fields}
            onSubmit={handle}
            schema={Schema}
            defaultValues={data}
            submitButtonText="Editar"></GenericForm>
    )
}