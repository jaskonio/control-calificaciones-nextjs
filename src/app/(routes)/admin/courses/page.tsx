import { deleteCourse } from "@/actions/coursesActions";
import { BaseTable } from "@/app/components/ui/table";
import { coursesService } from "@/services";


export default async function Page() {
  const data = await coursesService.getAll()
  const title = 'Clases'
  const columnNames = ['ID', 'Nombre', 'Descripcion', 'Nivel', 'Estado', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'description', 'gradeLevel', 'status']
  const baseAddUrl = '/admin/courses/add/'
  const baseEditUrl = '/admin/courses/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteCourse}
      primaryKey={primaryKey}
      onCanDelete={(item) => (!item.classes || item.classes.length != 0)}
    />)
}