import { gradeService, classService, studentService } from "@/services"
import EditGradeForm from "@/app/components/grade/editGradeForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await gradeService.getById(id)

  const studentOptions = await studentService.getAllOptions('id', 'name')
  const classOptions = await classService.getAllOptions('id', 'comments')


  return (
    <EditGradeForm id={id} defaultValues={model} studentOptions={studentOptions} classOptions={classOptions}></EditGradeForm>
  )
}