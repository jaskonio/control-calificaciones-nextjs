import { addSchoolYear } from "@/lib/actions";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddSchoolYear() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-md mx-auto">
              <CardHeader className="bg-indigo-600 text-white">
                <CardTitle className="text-2xl">Añadir Año Escolar</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form action={addSchoolYear} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Fecha de Inicio</Label>
                    <Input type="date" id="start_date" name="start_date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end_date">Fecha de Fin</Label>
                    <Input type="date" id="end_date" name="end_date" required />
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