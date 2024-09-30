import { TableCell, TableRow } from "@/components/ui/table"
import { teacherService } from '@/lib/services'
import { deleteTeacher } from '@/lib/teacherActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"


export default async function TeacherHomeContent() {
  const title = 'Docentes Escolares'
  const teachers = await teacherService.getAll()
  const columns = ['ID', 'Nombre', 'E-mail', 'Acciones']

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/teachers/add" />}
        columns={columns}
        rowContent={teachers.map((teacher) => (
          <TableRow key={teacher.teacher_id}>
            <TableCell>{teacher.teacher_id}</TableCell>
            <TableCell>{teacher.user.name}</TableCell>
            <TableCell>{teacher.user.email}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/teachers/edit/${teacher.teacher_id}`} />
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