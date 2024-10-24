import { coursesService, classService, subjectsService, teacherService } from "@/services"
import EditClassForm from "@/app/components/class/editClassForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const model = await classService.getById(id)

  const courseOptions = await coursesService.getAllOptions('id', 'name')
  const subjectOptions = await subjectsService.getAllOptions('id', 'name')
  const teacherOptions = await teacherService.getAllOptions('id', 'name')

  return (
    <EditClassForm id={id} defaultValues={model} courseOptions={courseOptions} subjectOptions={subjectOptions} teacherOptions={teacherOptions}></EditClassForm>
  )
}