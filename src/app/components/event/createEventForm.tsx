"use client"

import { addEvent } from "@/actions/eventActions";
import { GenericCardForm } from "../ui/form"
import EventFields from "./eventFields";
import EventSchema from "./eventSchema";
import { updateOptionFields } from "@/lib/utils";


export default function CreateEventForm({ acemicYearsOptions, schedulesOptions }: { acemicYearsOptions: any[], schedulesOptions: any[] }) {
    const optionsUpdate = { 'academicYearId': acemicYearsOptions, 'scheduleId': schedulesOptions }
    const fieldsProcessed = updateOptionFields({ fields: EventFields, options: optionsUpdate })


    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addEvent(data)
    };

    return (
        <GenericCardForm
            title="Añadir nuevo Evento"
            fields={fieldsProcessed}
            onSubmit={handleSubmit}
            schema={EventSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}