import { deleteParent } from "@/actions/parentActions";
import { BaseTable } from "@/app/components/ui/table";
import { parentService } from "@/services";


export default async function Page() {
  const title = "Lista de Profesores"
  const columnNames = ['ID', 'Nombre', 'Dirección', 'Telefono', 'Estado']
  const data = await parentService.getAll()
  const primaryKey = 'Id'
  const columnKeys = ['id', 'name', 'address', 'phone', 'status']
  const baseAddUrl = '/admin/parents/add/'
  const baseEditUrl = '/admin/parents/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteParent}
      primaryKey={primaryKey}
      onCanDelete={(item) => item.student.length != 0}
    />)
}