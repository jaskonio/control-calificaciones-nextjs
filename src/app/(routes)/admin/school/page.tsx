import { deleteSchoolYear } from "@/actions/schoolActions";
import SchoolTable from "@/app/components/school/schoolTable";
import { schoolService } from "@/services";


export default async function Page() {
  const data = await schoolService.getAll()
  const title = 'Años Escolares'
  const columns = ['ID', 'Nombre', 'Fecha de Inicio', 'Fecha de Fin', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'startDate', 'endDate', 'status']
  const baseAddUrl = '/admin/school/add/'
  const baseEditUrl = '/admin/school/edit/'

  return (
    <SchoolTable
      columnKeys={columnKeys}
      columnNames={columns}
      data={data}
      primaryKey={primaryKey}
      title={title}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      onDelete={deleteSchoolYear}></SchoolTable>
  )
}