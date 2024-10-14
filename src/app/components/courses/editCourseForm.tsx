"use client"

import { updateCourse } from "@/actions/coursesActions";
import { GenericCardForm } from "../ui/form"
import CourseFields from "./courseFields";
import CourseSchema from "./courseSchema";
import { updateOptionFields } from "@/lib/utils";


export default function EditCourseForm({ id, academicYearOptions, defaultValue }: { id: number, academicYearOptions: any[], defaultValue: any }) {
  const optionsUpdate = {'academicYearId': academicYearOptions}
  const CourseFieldsProcessed = updateOptionFields({ fields: CourseFields, options: optionsUpdate })

  const handleCreateUser = (data: any) => {
    console.log("Datos del formulario:", data);
    updateCourse(id, data)
  };

  return (
    <GenericCardForm
      title="Editar Curso"
      fields={CourseFieldsProcessed}
      onSubmit={handleCreateUser}
      schema={CourseSchema}
      defaultValues={defaultValue}
      submitButtonText="Editar"></GenericCardForm>
  )
}