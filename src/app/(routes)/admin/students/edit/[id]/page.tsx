import { studentService } from "@/services"
import EditStudentForm from "@/app/components/student/editStudentForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const student = await studentService.getById(id)


  return (
    <EditStudentForm id={id} defaultValues={student}></EditStudentForm>
  )
}