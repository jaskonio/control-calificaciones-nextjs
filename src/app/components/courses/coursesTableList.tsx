import { TableCell, TableRow } from "@/components/ui/table"
import { deleteCourse } from '@/actions/coursesActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { coursesService } from "@/services"


export default async function CoursesTableList() {
  const title = 'Clases'
  const columns = ['ID', 'Nombre', 'Categoria']
  const data = await coursesService.getAll()

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/courses/add/"/>}
        columns={columns}
        rowContent={data.map((item) => (
          <TableRow key={item.course_id}>
            <TableCell>{item.course_id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.parallel}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/courses/edit/${item.course_id}`} />
                <DeleteButton
                  action={deleteCourse}
                  entityId={item.course_id.toString()}
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