"use client"

import { updateEvent } from "@/actions/eventActions";
import { GenericCardForm } from "../ui/form"
import EventFields from "./eventFields";
import EventSchema from "./eventSchema";
import { updateOptionFields } from "@/lib/utils";


export default function EditEventForm({ id, defaultValues, acemicYearsOptions, schedulesOptions }: { id: number, defaultValues: any, acemicYearsOptions: any[], schedulesOptions: any[] }) {
    const optionsUpdate = { 'academicYearId': acemicYearsOptions, 'scheduleId': schedulesOptions }
    const fieldsProcessed = updateOptionFields({ fields: EventFields, options: optionsUpdate })

    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateEvent(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Evento"
            fields={fieldsProcessed}
            onSubmit={handleOnSubmit}
            schema={EventSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}