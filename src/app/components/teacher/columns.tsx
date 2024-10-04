"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"


export function TeacherColumns(): ColumnDef<TeacherView>[] {
    return [
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
        cell: ({ row }) => {
            console.log(row)
            return (
            <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
                row.toggleSelected(!!value)
                console.log(value)
                console.log(row)
            }}
            aria-label="Selecciona row"
            />
        )},
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
]
}