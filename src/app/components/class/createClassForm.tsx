"use client"

import { addClass } from "@/actions/classActions";
import { GenericCardForm, SelectOption } from "../ui/form"
import ClassFields from "./classFields";
import ClassSchema from "./classSchema";
import { updateOptionFields } from "@/lib/utils";

export default function CreateClassForm({ courseOptions, subjectOptions, teacherOptions }: { courseOptions: SelectOption[], subjectOptions: SelectOption[], teacherOptions: SelectOption[] }) {
    const optionsUpdate = { 'courseId': courseOptions, 'subjectId': subjectOptions, 'teacherId': teacherOptions }
    const CourseFieldsProcessed = updateOptionFields({ fields: ClassFields, options: optionsUpdate })


    const handleSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        addClass(data)
    };

    return (
        <GenericCardForm
            title="Añadir Nueva Clase"
            fields={CourseFieldsProcessed}
            onSubmit={handleSubmit}
            schema={ClassSchema}
            submitButtonText="Añadir"></GenericCardForm>
    )
}