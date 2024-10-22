"use client"

import { addAttendance } from "@/actions/attendanceActions";
import { GenericCardForm, SelectOption } from "../ui/form"
import AttendanceFields from "./attendanceFields";
import AttendanceSchema from "./attendanceSchema";
import { updateOptionFields } from "@/lib/utils";

export default function CreateAttendanceForm({ studentOptions, subjectOptions, scheduleOptions }: { studentOptions: SelectOption[], subjectOptions: SelectOption[], scheduleOptions: SelectOption[] }) {
    const optionsUpdate = { 'studentId': studentOptions, 'classId': subjectOptions, 'scheduleId': scheduleOptions }
    const CourseFieldsProcessed = updateOptionFields({ fields: AttendanceFields, options: optionsUpdate })


    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addAttendance(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nueva asistencia"
            fields={CourseFieldsProcessed}
            onSubmit={handleSubmit}
            schema={AttendanceSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}