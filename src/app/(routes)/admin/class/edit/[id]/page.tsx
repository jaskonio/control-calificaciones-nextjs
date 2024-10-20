import { coursesService, classService, subjectsService, teacherService } from "@/services"
import EditClassForm from "@/app/components/class/editClassForm"
import { SelectOption } from "@/app/components/ui/form"


export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const model = await classService.getById(id)

  const courses = await coursesService.getAll()
  const subjects = await subjectsService.getAll()
  const teachers = await teacherService.getAll()

  const courseOptions: SelectOption[] = courses.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  const subjectOptions: SelectOption[] = subjects.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  const teacherOptions: SelectOption[] = teachers.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })
  
  return (
    <EditClassForm id={id} defaultValues={model} courseOptions={courseOptions} subjectOptions={subjectOptions} teacherOptions={teacherOptions}></EditClassForm>
  )
}