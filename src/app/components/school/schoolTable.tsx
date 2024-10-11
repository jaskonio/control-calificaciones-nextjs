import { TableCell, TableRow } from "@/components/ui/table"
import { AddButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import TableDeleteButton from "../ui/tableButtons"


type SchoolTableProps = {
  title: string,
  columnNames: string[],
  data: any[],
  primaryKey: string,
  columnKeys: string[],
  baseAddUrl: string,
  baseEditUrl: string,
  onDelete: any
}

export default function SchoolTable({ title, columnNames, data, primaryKey, columnKeys, baseAddUrl, baseEditUrl, onDelete }: SchoolTableProps) {
  return (
    <BaseTable
      title={title}
      buttons={<AddButton href={baseAddUrl} />}
      columns={columnNames}
      rowContent={data.map((item) => (
        <TableRow key={item[primaryKey]}>
          {columnKeys.map((col, index) => (<TableCell key={index}>{item[col]}</TableCell>))}

          <TableCell>
            <div className="flex space-x-2">
              <EditButton href={`${baseEditUrl}${item.id}`} />
              { (item.courses.length != 0 || item.students.length != 0 || item.students.length != 0) 
              ? <TableDeleteButton canDelete={false} data={item} onDelete={onDelete}></TableDeleteButton>
              : <TableDeleteButton canDelete={true} data={item} onDelete={onDelete}></TableDeleteButton>
              }
              </div>
          </TableCell>
        </TableRow>
      ))}
    />
  )
}