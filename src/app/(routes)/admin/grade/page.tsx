import { deleteGrade } from "@/actions/gradeActions";
import { BaseTable } from "@/app/components/ui/table";
import { GradeViewModel } from "@/models/grade";
import { gradeService } from "@/services";


export default async function Page() {
  const data = await gradeService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Estudiante Nombre', 'Curso', 'Asignatura', 'Nota', 'Tipo', 'Fecha', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'student.user.name', 'class.course.name', 'class.subject.name', 'score', 'evaluationType', 'evaluationDate']
  const baseAddUrl = '/admin/grade/add/'
  const baseEditUrl = '/admin/grade/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteGrade}
      primaryKey={primaryKey}
      onCanDelete={(item: GradeViewModel) => !item.student}
    />)
}