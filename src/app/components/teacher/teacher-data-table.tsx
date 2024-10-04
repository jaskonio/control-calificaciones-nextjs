"use client"


import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./data-table"
import { Checkbox } from "@/components/ui/checkbox"


interface TeacherTableView extends TeacherView{
  isAdded: boolean
}

interface TeacherDataTable {
  data: TeacherView[],
  defaultRows: TeacherView[]
}

export function TeacherDataTable({
  data,
  defaultRows,
}: TeacherDataTable) {
  console.log("Data table")
  console.log(data)
  console.log("Data selecting..")
  console.log(defaultRows)

  const TeacherColumns: ColumnDef<TeacherTableView>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
            checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Selecciona todo"
            />
        ),
        cell: ({ row }) => (
          <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => { row.toggleSelected(!!value) }}
          aria-label="Selecciona row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "first_name",
        header: "Nombre",
    },
    {
        accessorKey: "last_name",
        header: "Apellido",
    },
    {
        accessorKey: "user.email",
        header: "Correo",
    },
    {
      accessorKey: "isAdded",
      header: "Añadido",
      cell: ({ row }) => {
        if (row.original.isAdded) return (<p>Añadido</p>)

        return (<p>No Añadido</p>)
      },
    },
  ]

  let defaultSelectedRows: string[] = []

  const dataProcessed: TeacherTableView[] = data.map( (t, index) => {
    const foundTeacher = defaultRows.find(x=> x.teacher_id == t.teacher_id)
    let isAdded = false
    if (foundTeacher) {
      isAdded = true
      defaultSelectedRows.push(index.toString())
    }
  
    console.log(foundTeacher)
    return {...t, isAdded }
  })

  return (
    <DataTable columns={TeacherColumns} data={dataProcessed} selectedRowsById={defaultSelectedRows}></DataTable>
  )
}
