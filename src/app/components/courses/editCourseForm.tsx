"use client"

import { updateCourse } from "@/actions/coursesActions";
import { GenericCardForm } from "../ui/form"
import CourseFields from "./courseFields";
import CourseSchema from "./courseSchema";


export default function EditCourseForm({ id, academicYearOptions, defaultValue }: { id: number, academicYearOptions: any[], defaultValue: any }) {
  const CourseFieldsProcessed = CourseFields.map(x => {
    if (x.name == 'academicYearId') {
      x.options = academicYearOptions
    }

    return x
  })

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
      submitButtonText="Añadir"></GenericCardForm>
  )
}