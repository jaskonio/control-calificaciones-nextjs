import { deleteSubjects } from "@/actions/subjectsActions";
import { BaseTable } from "@/app/components/ui/table";
import { SubjectViewModel } from "@/models/subject";
import { subjectsService } from "@/services";


export default async function Page() {
  const data = await subjectsService.getAll()
  const title = 'Asignaturas'
  const columnNames = ['ID', 'Nombre', 'Descripción', 'Nivel', 'Estado', 'Acciones']
  const primaryKey = 'id'
  const columnKeys = ['id', 'name', 'description', 'gradeLevel', 'status']
  const baseAddUrl = '/admin/subjects/add/'
  const baseEditUrl = '/admin/subjects/edit/'

  return (
    <BaseTable
      title={title}
      columnNames={columnNames}
      columnKeys={columnKeys}
      baseAddUrl={baseAddUrl}
      baseEditUrl={baseEditUrl}
      data={data}
      onDelete={deleteSubjects}
      primaryKey={primaryKey}
      onCanDelete={(item: SubjectViewModel) => (item.classes && item.classes.length != 0)}
    />)
}