import { deleteTeacher } from "@/actions/teacherActions";
import { BaseTable } from "@/app/components/ui/table";
import { TeacherViewModel } from "@/models/teacher";
import { teacherService } from "@/services";


export default async function Page() {
  const title = "Lista de Profesores"
  const columnNames = ['ID', 'Nombre', 'Habilidad', 'Fecha incorporación', 'Estado']
  const data = await teacherService.getAll()
  const primaryKey = 'Id'
  const columnKeys = ['id', 'user.name', 'expertise', 'hireDate', 'status']
  const baseAddUrl = '/admin/teachers/add/'
  const baseEditUrl = '/admin/teachers/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteTeacher}
      primaryKey={primaryKey}
      onCanDelete={(item: TeacherViewModel) => !item.user}
    />)
}