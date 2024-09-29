import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'
import { deleteSchoolYear } from '@/lib/schoolActions'
import { schoolService } from '@/lib/services'


export default async function SchoolYearsContent() {
  const schoolYears = await schoolService.getAll()

  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="text-2xl">Años Escolares</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <Button asChild className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
                    <Link href="/school/add">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Añadir Año Escolar
                    </Link>
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Fecha de Inicio</TableHead>
                      <TableHead>Fecha de Fin</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schoolYears.map((year) => (
                      <TableRow key={year.year_id}>
                        <TableCell>{year.year_id}</TableCell>
                        <TableCell>{year.start_date}</TableCell>
                        <TableCell>{year.end_date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/school/edit/${year.year_id}`}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Editar
                              </Link>
                            </Button>
                            <form action={deleteSchoolYear}>
                              <input type="hidden" name="year_id" value={year.year_id} />
                              <Button type="submit" variant="destructive" size="sm">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Eliminar
                              </Button>
                            </form>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}