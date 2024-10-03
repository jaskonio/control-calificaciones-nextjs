import { TableCell, TableRow } from "@/components/ui/table"
import { deleteTeacher } from '@/actions/teacherActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { teacherService } from "@/services"


export default async function TeacherHomeContent() {
  const title = 'Docentes Escolares'
  const teachers = await teacherService.getAll()
  const columns = ['ID', 'Nombre', 'Apellido', 'Username', 'E-mail', 'Acciones']

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/admin/teachers/add" />}
        columns={columns}
        rowContent={teachers.map((teacher) => (
          <TableRow key={teacher.teacher_id}>
            <TableCell>{teacher.teacher_id}</TableCell>
            <TableCell>{teacher.first_name}</TableCell>
            <TableCell>{teacher.last_name}</TableCell>
            <TableCell>{teacher.user.name}</TableCell>
            <TableCell>{teacher.user.email}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/admin/teachers/edit/${teacher.teacher_id}`} />
                <DeleteButton
                  action={deleteTeacher}
                  entityId={teacher.teacher_id.toString()}
                  formInputName="teacher_id"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}