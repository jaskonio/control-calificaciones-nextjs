import { coursesService, schoolService } from "@/services"
import EditCourseForm from "@/app/components/courses/editCourseForm"
import { SelectOption } from "@/app/components/ui/form"

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const course = await coursesService.getById(id)
  const academicYearViewModels = await schoolService.getAll()

  const academicYearOptions: SelectOption[] = academicYearViewModels.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  return (
    <EditCourseForm
      id={id}
      academicYearOptions={academicYearOptions}
      defaultValue={course}></EditCourseForm>
  )
}