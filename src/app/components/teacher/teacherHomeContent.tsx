import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'
import { teacherService } from '@/lib/services'
import { deleteTeacher } from '@/lib/teacherActions'


export default async function TeacherHomeContent() {
  const schoolYears = await teacherService.getAll()

  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-yellow-500 text-white">
                <CardTitle className="text-2xl">Docentes Escolares</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <Button asChild className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
                    <Link href="/teachers/add">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Añadir Docente
                    </Link>
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schoolYears.map((teacher) => (
                      <TableRow key={teacher.teacher_id}>
                        <TableCell>{teacher.teacher_id}</TableCell>
                        <TableCell>{teacher.user.name}</TableCell>
                        <TableCell>{teacher.user.email}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button asChild variant="outline" size="sm">
                              <Link href={`/teachers/edit/${teacher.teacher_id}`}>
                                <Pencil className="mr-2 h-4 w-4" />
                                Editar
                              </Link>
                            </Button>
                            <form action={deleteTeacher}>
                              <input type="hidden" name="teacher_id" value={teacher.teacher_id} />
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