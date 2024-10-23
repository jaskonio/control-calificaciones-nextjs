import { deleteSchedule } from "@/actions/scheduleActions";
import { BaseTable } from "@/app/components/ui/table";
import { ScheduleViewModel } from "@/models/schedule";
import { scheduleService } from "@/services";


export default async function Page() {
  const data = await scheduleService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Aula', 'Inicio', 'Final', 'Descripción', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'classroom.name', 'startTime', 'endTime' , 'description']
  const baseAddUrl = '/admin/schedule/add/'
  const baseEditUrl = '/admin/schedule/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteSchedule}
      primaryKey={primaryKey}
      onCanDelete={(item: ScheduleViewModel) => (item.attendances.length != 0)}
    />)
}