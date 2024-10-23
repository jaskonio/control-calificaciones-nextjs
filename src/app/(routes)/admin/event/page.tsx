import { deleteEvent } from "@/actions/eventActions";
import { BaseTable } from "@/app/components/ui/table";
import { ClassViewModel } from "@/models/class";
import { EventViewModel } from "@/models/event";
import { eventService } from "@/services";


export default async function Page() {
  const data = await eventService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Año Academico', 'Titulo', 'Descripción', 'Fecha', 'Tipo de evento', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'academicYear.name', 'title', 'description', 'date', 'eventType']
  const baseAddUrl = '/admin/event/add/'
  const baseEditUrl = '/admin/event/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteEvent}
      primaryKey={primaryKey}
      onCanDelete={(item: EventViewModel) => (!item.academicYear)}
    />)
}