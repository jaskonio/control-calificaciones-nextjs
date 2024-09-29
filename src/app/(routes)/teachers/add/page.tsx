import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTeacher } from "@/lib/teacherActions"

export default function AddTeacher() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-md mx-auto">
              <CardHeader className="bg-yellow-500 text-white">
                <CardTitle className="text-2xl">Añadir Docente Escolar</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form action={addTeacher} className="space-y-4">
                  <input type="hidden" name="role" value="teacher" />
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Nombre</Label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-300">
                    Añadir Año Escolar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}