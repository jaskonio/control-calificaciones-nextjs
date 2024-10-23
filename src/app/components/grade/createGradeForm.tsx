"use client"

import { addGrade } from "@/actions/gradeActions";
import { GenericCardForm } from "../ui/form"
import GradeFields from "./gradeFields";
import GradeSchema from "./gradeSchema";
import { updateOptionFields } from "@/lib/utils";


export default function CreateGradeForm({ studentOptions, classOptions }: { studentOptions: any[], classOptions: any[] }) {
    const optionsUpdate = { 'studentId': studentOptions, 'classId': classOptions }
    const fieldsProcessed = updateOptionFields({ fields: GradeFields, options: optionsUpdate })

    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addGrade(data)
    };

    return (
        <GenericCardForm
            title="Añadir nueva nota"
            fields={fieldsProcessed}
            onSubmit={handleSubmit}
            schema={GradeSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}