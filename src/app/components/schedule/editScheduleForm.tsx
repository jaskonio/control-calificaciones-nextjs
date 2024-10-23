"use client"

import { updateSchedule } from "@/actions/scheduleActions";
import { GenericCardForm } from "../ui/form"
import ScheduleFields from "./scheduleFields";
import ScheduleSchema from "./scheduleSchema";
import { updateOptionFields } from "@/lib/utils";


export default function EditScheduleForm({ id, defaultValues,
    classroomOptions,
    classOptions,
    eventOptions
}: { id: number, defaultValues: any,
    classroomOptions: any[],
    classOptions: any[],
    eventOptions: any[]
 }) {
    const optionsUpdate = {
        'classroomId': classroomOptions,
        'classId': classOptions,
        'eventId': eventOptions
    }
    const fieldsProcessed = updateOptionFields({ fields: ScheduleFields, options: optionsUpdate })

    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateSchedule(id, data)
    };

    return (
        <GenericCardForm
            title="Editar horario"
            fields={fieldsProcessed}
            onSubmit={handleOnSubmit}
            schema={ScheduleSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}