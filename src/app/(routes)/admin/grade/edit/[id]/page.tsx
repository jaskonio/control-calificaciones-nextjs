import { gradeService, classService, studentService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import EditGradeForm from "@/app/components/grade/editGradeForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await gradeService.getById(id)
  const studentOptions: SelectOption[] = await studentService.getAllOptions('id', 'name')
  const classOptions: SelectOption[] = await classService.getAllOptions('id', 'comments')


  return (
    <EditGradeForm id={id} defaultValues={model} studentOptions={studentOptions} classOptions={classOptions}></EditGradeForm>
  )
}