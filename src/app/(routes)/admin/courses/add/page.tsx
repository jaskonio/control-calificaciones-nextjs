import { BaseCard } from "@/app/components/ui/cards"
import CourseForm from "@/app/components/courses/courseForm"
import { addCourse } from "@/actions/coursesActions"
import { schoolService } from "@/services"


export default async function Page() {
  const values = await schoolService.getAll()

  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Añadir Nueva Clase"
        content={(
          <CourseForm submitHandler={addCourse} academicYearAvailables={values}></CourseForm>
        )}
      ></BaseCard>
    </div>
  )
}