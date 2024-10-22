import { deleteSchoolYear } from "@/actions/academicYearActions";
import { BaseTable } from "@/app/components/ui/table";
import { AcademicYearViewModel } from "@/models/academicYear";
import { schoolService } from "@/services";


export default async function Page() {
  const data = await schoolService.getAll()
  const title = 'Años Escolares'
  const columnNames = ['ID', 'Nombre', 'Fecha de Inicio', 'Fecha de Fin', 'Estado', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'startDate', 'endDate', 'status']
  const baseAddUrl = '/admin/school/add/'
  const baseEditUrl = '/admin/school/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteSchoolYear}
      primaryKey={primaryKey}
      onCanDelete={(item: AcademicYearViewModel) => (item.courses.length != 0 || item.events.length != 0)}
    />)
}