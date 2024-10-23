import { deleteSetting } from "@/actions/settingActions";
import { BaseTable } from "@/app/components/ui/table";
import { settingService } from "@/services";


export default async function Page() {
  const data = await settingService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'key', 'value', 'Descripción', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'key', 'value', 'description']
  const baseAddUrl = '/admin/setting/add/'
  const baseEditUrl = '/admin/setting/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteSetting}
      primaryKey={primaryKey}
    />)
}