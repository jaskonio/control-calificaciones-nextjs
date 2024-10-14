"use client"

import { addCourse } from "@/actions/coursesActions";
import { GenericCardForm, SelectOption } from "../ui/form"
import CourseFields from "./courseFields";
import CourseSchema from "./courseSchema";
import { updateOptionFields } from "@/lib/utils";


export default function CreateCourseForm({ academicYearOptions }: { academicYearOptions: SelectOption[] }) {
  const optionsUpdate = {'academicYearId': academicYearOptions}
  const CourseFieldsProcessed = updateOptionFields({ fields: CourseFields, options: optionsUpdate })

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