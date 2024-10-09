import { deleteCourse } from "@/actions/coursesActions";
import CoursesTableList from "@/app/components/courses/coursesTableList";
import { coursesService } from "@/services";

export default async function Page() {
  const data = await coursesService.getAll()
  const title = 'Clases'
  const columns = ['ID', 'Nombre', 'Descripcion', 'Nivel', 'Estado', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'description', 'gradeLevel', 'status']
  const baseAddUrl = '/admin/courses/add/'
  const baseEditUrl = '/admin/courses/edit/'

  return (
    <CoursesTableList
      columnKeys={columnKeys}
      columnNames={columns}
      data={data}
      primaryKey={primaryKey}
      title={title}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      onDelete={deleteCourse}>
    </CoursesTableList>
  )
}