import { TableCell, TableRow } from "@/components/ui/table"
import { deleteSubjects } from '@/actions/subjectsActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { subjectsService } from "@/services"


export default async function SubjectsTableList() {
  const title = 'Asignaturas'
  const columns = ['ID', 'Nombre', 'Descripcione']
  const data = await subjectsService.getAll()

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/admin/subjects/add/"/>}
        columns={columns}
        rowContent={data.map((item) => (
          <TableRow key={item.subject_id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/admin/subjects/edit/${item.subject_id}`} />
                <DeleteButton
                  action={deleteSubjects}
                  entityId={item.subject_id.toString()}
                  formInputName="subject_id"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}