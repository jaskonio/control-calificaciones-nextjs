import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AddButton, EditButton } from "./button"


function BaseTableButtons({ buttons }: { buttons: any }) {
  return (
    <div className="mb-6">
      {buttons}
    </div>
  )
}

type BaseTableProps = {
  title: string;
  buttons: any;
  columns: string[];
  rowContent: any;
}

export async function BaseTable({ title, buttons, columns, rowContent }: BaseTableProps) {

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-accent text-white text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <BaseTableButtons buttons={buttons} />

        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, index) => (
                <TableHead key={index}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rowContent}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export function BaseTableLoadingSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-indigo-600">
        <CardTitle className="text-2xl text-white">
          <Skeleton className="h-8 w-48 bg-indigo-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <Skeleton className="h-10 w-48" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead><Skeleton className="h-4 w-8" /></TableHead>
              <TableHead><Skeleton className="h-4 w-32" /></TableHead>
              <TableHead><Skeleton className="h-4 w-32" /></TableHead>
              <TableHead><Skeleton className="h-4 w-24" /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}