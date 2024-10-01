import { BaseCard } from "@/app/components/ui/cards"
import { ResoucesNotFound } from "@/app/components/ui/errors"
import { coursesService } from "@/services"
import CourseForm from "@/app/components/courses/courseForm"
import { updateCourse } from "@/actions/coursesActions"

export default async function Page({ params }: { params: { id: string } }) {
  const course = await coursesService.getById(parseInt(params.id))

  if (!course) {
    return (
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ResoucesNotFound 
            title="Clase no encontrado"
            content="Lo sentimos, no pudimos encontrar la clase que estás buscando."
            description="Es posible que la clase haya sido eliminado o que la URL sea incorrecta. Por favor, verifica la información e intenta nuevamente."
            prevhref="/courses"
            prevhrefMessage="Ver todos las clases"
          />
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
    <BaseCard
      title="Editar Año Escolar"
      content={(
        <CourseForm course_id={course.course_id} name={course.name} parallel={course.parallel} submitHandler={updateCourse}></CourseForm>
      )}
    ></BaseCard>
  </div>

  )
}