import { deleteClassRoom } from "@/actions/classRoomActions";
import { BaseTable } from "@/app/components/ui/table";
import { ClassRoomViewModel } from "@/models/classroom";
import { classRoomService } from "@/services";


export default async function Page() {
  const data = await classRoomService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Nombre', 'Capacidad', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'capacity']
  const baseAddUrl = '/admin/classroom/add/'
  const baseEditUrl = '/admin/classroom/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteClassRoom}
      primaryKey={primaryKey}
      onCanDelete={(item: ClassRoomViewModel) => (item.schedules != undefined)}
    />)
}