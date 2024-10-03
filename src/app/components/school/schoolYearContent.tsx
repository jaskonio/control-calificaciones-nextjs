import { TableCell, TableRow } from "@/components/ui/table"
import { deleteSchoolYear } from '@/actions/schoolActions'
import { AddButton, DeleteButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import { schoolService } from "@/services"


export default async function SchoolYearsContent() {
  const title = 'Años Escolares'
  const columns = ['ID', 'Fecha de Inicio', 'Fecha de Fin', 'Acciones']
  const data = await schoolService.getAll()

  return (
    <div className="container mx-auto px-4">
      <BaseTable
        title={title}
        buttons={<AddButton href="/admin/school/add/"/>}
        columns={columns}
        rowContent={data.map((item) => (
          <TableRow key={item.year_id}>
            <TableCell>{item.year_id}</TableCell>
            <TableCell>{item.start_date}</TableCell>
            <TableCell>{item.end_date}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditButton href={`/admin/school/edit/${item.year_id}`} />
                <DeleteButton
                  action={deleteSchoolYear}
                  entityId={item.year_id.toString()}
                  formInputName="year_id"
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      />
    </div>
  )
}