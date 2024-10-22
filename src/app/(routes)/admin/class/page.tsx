import { deleteClass } from "@/actions/classActions";
import { BaseTable } from "@/app/components/ui/table";
import { ClassViewModel } from "@/models/class";
import { classService } from "@/services";


export default async function Page() {
  const data = await classService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Curso', 'Asignatura', 'Profesor', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'course.name', 'subject.name', 'teacher.user.name']
  const baseAddUrl = '/admin/class/add/'
  const baseEditUrl = '/admin/class/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteClass}
      primaryKey={primaryKey}
      onCanDelete={(item: ClassViewModel) => (item.course != undefined)}
    />)
}