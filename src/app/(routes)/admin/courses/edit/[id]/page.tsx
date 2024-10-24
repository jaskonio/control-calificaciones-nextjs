import { coursesService, schoolService } from "@/services"
import EditCourseForm from "@/app/components/courses/editCourseForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const course = await coursesService.getById(id)
  const academicYearOptions = await schoolService.getAllOptions('id', 'name')

  return (
    <EditCourseForm
      id={id}
      academicYearOptions={academicYearOptions}
      defaultValue={course}></EditCourseForm>
  )
}