import { deleteAttendance } from "@/actions/attendanceActions";
import { BaseTable } from "@/app/components/ui/table";
import { ClassViewModel } from "@/models/class";
import { attendanceService } from "@/services";


export default async function Page() {
  const data = await attendanceService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Curso', 'Asignatura', 'Nombre Alumno', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'class.course.name', 'class.subject.name', 'student.user.name']
  const baseAddUrl = '/admin/attendance/add/'
  const baseEditUrl = '/admin/attendance/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteAttendance}
      primaryKey={primaryKey}
      onCanDelete={(item: ClassViewModel) => (item.course != undefined)}
    />)
}