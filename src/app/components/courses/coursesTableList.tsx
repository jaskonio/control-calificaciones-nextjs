import { TableCell, TableRow } from "@/components/ui/table"
import { AddButton, EditButton } from '../ui/button'
import { BaseTable } from "../ui/table"
import DeleteCourseButton from "./deleteButton"


type CoursesTableListProps = {
  title: string,
  columnNames: string[],
  data: any[],
  primaryKey: string,
  columnKeys: string[],
  baseAddUrl: string,
  baseEditUrl: string,
  onDelete: any
}

export default function CoursesTableList({ title, columnNames, data, primaryKey, columnKeys, baseAddUrl, baseEditUrl, onDelete }: CoursesTableListProps) {
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
              <DeleteCourseButton onDelete={onDelete} record={item} ></DeleteCourseButton>
            </div>
          </TableCell>
        </TableRow>
      ))}
    />
  )
}