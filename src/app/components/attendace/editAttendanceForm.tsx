"use client"

import { GenericCardForm, SelectOption } from "../ui/form"
import ClassSchema from "./attendanceSchema";
import { updateOptionFields } from "@/lib/utils";
import AttendanceFields from "./attendanceFields";
import { updateAttendance } from "@/actions/attendanceActions";

export default function EditAttendanceForm({ id, defaultValues, studentOptions, subjectOptions, scheduleOptions }: { id: number, defaultValues: any, studentOptions: SelectOption[], subjectOptions: SelectOption[], scheduleOptions: SelectOption[] }) {
    const optionsUpdate = { 'studentId': studentOptions, 'classId': subjectOptions, 'scheduleId': scheduleOptions }
    const fieldsProcessed = updateOptionFields({ fields: AttendanceFields, options: optionsUpdate })


    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateAttendance(id, data)
    };

    return (
        <GenericCardForm
            title="Editar asistencia"
            fields={fieldsProcessed}
            onSubmit={handleOnSubmit}
            schema={ClassSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}