import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateTeacher } from "@/lib/teacherActions"
import { teacherService } from "@/lib/services"


export default async function EditTeacher({ params }: { params: { id: string } }) {
  const teacher = await teacherService.getById(parseInt(params.id))

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <p className="text-center text-red-600">Docente escolar no encontrado</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="bg-yellow-500 text-white">
            <CardTitle className="text-2xl">Editar Docente Escolar</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form action={updateTeacher} className="space-y-4">
              <input type="hidden" name="role" value="teacher" />
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input type="text" id="name" name="name" required defaultValue={teacher.user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Fecha de Fin</Label>
                <Input type="email" id="email" name="email" required defaultValue={teacher.user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" id="password" name="password" required defaultValue={teacher.user.password} />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
                Actualizar Docente Escolar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}