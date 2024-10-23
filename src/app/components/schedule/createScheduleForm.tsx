"use client"

import { addSchedule } from "@/actions/scheduleActions";
import { GenericCardForm } from "../ui/form"
import ScheduleFields from "./scheduleFields";
import ScheduleSchema from "./scheduleSchema";
import { updateOptionFields } from "@/lib/utils";


export default function CreateScheduleForm({
    classroomOptions,
    classOptions,
    eventOptions
}: {
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

    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addSchedule(data)
    };

    return (
        <GenericCardForm
            title="Añadir nuevo horario"
            fields={fieldsProcessed}
            onSubmit={handleSubmit}
            schema={ScheduleSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}