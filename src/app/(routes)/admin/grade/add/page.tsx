import { studentService, classService } from "@/services"
import CreateGradeForm from "@/app/components/grade/createGradeForm"


export default async function Page() {
  const studentOptions = await studentService.getAllOptions('id', 'name')
  const classOptions = await classService.getAllOptions('id', 'comments')

  return (
    <CreateGradeForm studentOptions={studentOptions} classOptions={classOptions}></CreateGradeForm>
  )
}