import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


function BaseTableButtons({buttons}: {buttons:any}){
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

export default async function BaseTable({ title, buttons, columns, rowContent}: BaseTableProps) {

  return (
            <Card className="overflow-hidden">
              <CardHeader className="bg-accent3 text-white text-center">
                <CardTitle className="text-2xl">{title}</CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <BaseTableButtons buttons={buttons}/>

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