"use client"

import { addCourse } from "@/actions/coursesActions";
import { GenericCardForm } from "../ui/form"
import CourseFields from "./courseFields";
import CourseSchema from "./courseSchema";


export default function CreateCourseForm({ academicYearOptions }: { academicYearOptions: any[] }) {
  const CourseFieldsProcessed = CourseFields.map(x => {
    if (x.name == 'academicYearId') {
      x.options = academicYearOptions
    }

    return x
  })

  const handleCreateUser = (data: any) => {
    console.log("Datos del formulario:", data);
    addCourse(data)
  };

  return (
    <GenericCardForm
      title="Añadir Nuevo Curso"
      fields={CourseFieldsProcessed}
      onSubmit={handleCreateUser}
      schema={CourseSchema}
      submitButtonText="Añadir"></GenericCardForm>
  )
}