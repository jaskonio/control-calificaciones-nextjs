"use client"

import { updateClass } from "@/actions/classActions";
import { GenericCardForm, SelectOption } from "../ui/form"
import ClassFields from "./classFields";
import ClassSchema from "./classSchema";
import { updateOptionFields } from "@/lib/utils";

export default function EditClassForm({ id, defaultValues, courseOptions, subjectOptions, teacherOptions }: { id: number, defaultValues: any, courseOptions: SelectOption[], subjectOptions: SelectOption[], teacherOptions: SelectOption[] }) {
    const optionsUpdate = { 'courseId': courseOptions, 'subjectId': subjectOptions, 'teacherId': teacherOptions }
    const CourseFieldsProcessed = updateOptionFields({ fields: ClassFields, options: optionsUpdate })

    const handleOnSubmit = (data: any) => {
        console.log("Datos del formulario:", data);
        updateClass(id, data)
    };

    return (
        <GenericCardForm
            title="Editar Clase"
            fields={CourseFieldsProcessed}
            onSubmit={handleOnSubmit}
            schema={ClassSchema}
            defaultValues={defaultValues}
            submitButtonText="Guardar"></GenericCardForm>
    )
}