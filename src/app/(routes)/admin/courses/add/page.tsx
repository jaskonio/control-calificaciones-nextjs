import { BaseCard } from "@/app/components/ui/cards"
import CourseForm from "@/app/components/courses/courseForm"
import { schoolService } from "@/services"
import { addCourse } from "@/actions/coursesActions"


export default async function Page() {
  const values = await schoolService.getAll()

  return (
    <BaseCard
      title="Añadir Nueva Clase"
      content={(
        <CourseForm submitHandler={addCourse} academicYearAvailables={values}></CourseForm>
      )}
    ></BaseCard>
  )
}