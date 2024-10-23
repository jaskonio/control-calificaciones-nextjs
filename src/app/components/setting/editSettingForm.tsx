"use client"

import { updateSetting } from "@/actions/settingActions";
import { GenericCardForm } from "../ui/form"
import SettingFields from "./settingFields";
import SettingSchema from "./settingSchema";


export default function EditSettingForm({ id, defaultValues }: { id: number, defaultValues: any }) {
    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateSetting(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Configuracion"
            fields={SettingFields}
            onSubmit={handleOnSubmit}
            schema={SettingSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}