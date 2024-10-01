import { TableCell, TableRow } from "@/components/ui/table"
import { deleteStudent } from '@/actions/studentsActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { studentService } from "@/services"


export default async function StudenHomeContent() {
  const title = 'Estudiantes'
  const data = await studentService.getAll()
  const columns = ['ID', 'Nombre', 'Apellido', 'Nacimiento', 'Username', 'E-mail', 'Acciones']

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/students/add" />}
        columns={columns}
        rowContent={data.map((item) => (
          <TableRow key={item.student_id}>
            <TableCell>{item.student_id}</TableCell>
            <TableCell>{item.first_name}</TableCell>
            <TableCell>{item.last_name}</TableCell>
            <TableCell>{item.birth_data}</TableCell>
            <TableCell>{item.user.name}</TableCell>
            <TableCell>{item.user.email}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/students/edit/${item.student_id}`} />
                <DeleteButton
                  action={deleteStudent}
                  entityId={item.student_id.toString()}
                  formInputName="student_id"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}