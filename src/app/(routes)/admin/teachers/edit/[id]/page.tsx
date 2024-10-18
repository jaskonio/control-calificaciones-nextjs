import EditTeacherForm from "@/app/components/teacher/editTeacherForm"
import { teacherService } from "@/services"


export default async function EditTeacher({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const teacher = await teacherService.getById(id)


  return (
    <EditTeacherForm id={id} defaultValues={teacher}></EditTeacherForm>
  )
}