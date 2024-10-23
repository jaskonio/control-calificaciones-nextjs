"use client"

import { updateGrade } from "@/actions/gradeActions";
import { GenericCardForm } from "../ui/form"
import GradeFields from "./gradeFields";
import GradeSchema from "./gradeSchema";
import { updateOptionFields } from "@/lib/utils";


export default function EditGradeForm({ id, defaultValues, studentOptions, classOptions }: { id: number, defaultValues: any, studentOptions: any[], classOptions: any[] }) {
    const optionsUpdate = { 'studentId': studentOptions, 'classId': classOptions }
    const fieldsProcessed = updateOptionFields({ fields: GradeFields, options: optionsUpdate })

    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateGrade(id, data)
    };

    return (
        <GenericCardForm
            title="Editar nota"
            fields={fieldsProcessed}
            onSubmit={handleOnSubmit}
            schema={GradeSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}