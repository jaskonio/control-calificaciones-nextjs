import { studentService, classService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import CreateGradeForm from "@/app/components/grade/createGradeForm"


export default async function Page() {
  const studentOptions: SelectOption[] = await studentService.getAllOptions('id', 'name')
  const classOptions: SelectOption[] = await classService.getAllOptions('id', 'comments')

  return (
    <CreateGradeForm studentOptions={studentOptions} classOptions={classOptions}></CreateGradeForm>
  )
}