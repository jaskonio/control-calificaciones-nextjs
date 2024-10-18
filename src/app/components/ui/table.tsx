import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AddButton, EditButton } from "./button";
import TableDeleteButton from "./tableButtons";


const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

type BaseTableProps = {
  title: string;
  columnNames: string[];
  columnKeys: string[];
  primaryKey: string;
  data: any[],
  baseAddUrl: string;
  baseEditUrl: string;
  onDelete: any
  onCanDelete?: (row: any) => boolean
}

export function BaseTable({ title, columnNames, columnKeys, primaryKey, data, baseAddUrl, baseEditUrl, onDelete, onCanDelete }: BaseTableProps) {

  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-6">
          <AddButton href={baseAddUrl} />
        </div>

        <Table>
          <TableHeader className="text-lg">
            <TableRow>
              {columnNames.map((col, index) => (
                <TableHead key={index}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item[primaryKey]}>
                {columnKeys.map((colKey, index) => (<TableCell key={index}>{getNestedValue(item, colKey)}</TableCell>))}

                <TableCell>
                  <div className="flex space-x-2">
                    <EditButton href={`${baseEditUrl}${item.id}`} />
                    {onCanDelete && onCanDelete(item)
                      ? <TableDeleteButton canDelete={false} data={item} onDelete={onDelete}></TableDeleteButton>
                      : <TableDeleteButton canDelete={true} data={item} onDelete={onDelete}></TableDeleteButton>
                    }
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

export function BaseTableLoadingSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-indigo-100">
        <CardTitle className="text-2xl text-white">
          <Skeleton className="h-8 w-48" />
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