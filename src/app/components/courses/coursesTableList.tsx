import { TableCell, TableRow } from "@/components/ui/table"
import { deleteCourse } from '@/actions/coursesActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { coursesService } from "@/services"


export default async function CoursesTableList() {
  const title = 'Clases'
  const columns = ['ID', 'Nombre', 'Descripcion', 'Nivel', 'Estado', 'Acciones']
  const data = await coursesService.getAll()

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/admin/courses/add/"/>}
        columns={columns}
        rowContent={data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.gradeLevel}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/admin/courses/edit/${item.id}`} />
                <DeleteButton
                  action={deleteCourse}
                  entityId={item.id.toString()}
                  formInputName="course_id"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}