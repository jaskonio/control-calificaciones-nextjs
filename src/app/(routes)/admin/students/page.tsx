import { deleteStudent } from "@/actions/studentsActions";
import { BaseTable } from "@/app/components/ui/table";
import { studentService } from "@/services";


export default async function Page() {
  const data = await studentService.getAll()
  const title = 'Años Escolares'
  const columnNames = ['ID', 'Nombre', 'Fecha de inscripcón', 'Fecha De Nacimiento', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'enrollmentDate', 'birthDate']
  const baseAddUrl = '/admin/students/add/'
  const baseEditUrl = '/admin/students/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteStudent}
      primaryKey={primaryKey}
      onCanDelete={(item) => (item.academicYear.length != 0 || item.enrollments.length != 0 || item.parents.length != 0)}
    />)
}