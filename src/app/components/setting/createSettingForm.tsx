"use client"

import { addSetting } from "@/actions/settingActions";
import { GenericCardForm } from "../ui/form"
import SettingFields from "./settingFields";
import SettingSchema from "./settingSchema";


export default function CreateSettingForm() {
    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addSetting(data)
    };

    return (
        <GenericCardForm
            title="Añadir nueva configuracion"
            fields={SettingFields}
            onSubmit={handleSubmit}
            schema={SettingSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}