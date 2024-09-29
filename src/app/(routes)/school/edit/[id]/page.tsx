import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateSchoolYear } from "@/lib/actions"
import { getSchoolYearById } from "@/lib/data"

export default async function EditSchoolYear({ params }: { params: { id: string } }) {
  const schoolYear = await getSchoolYearById(parseInt(params.id))

  if (!schoolYear) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <p className="text-center text-red-600">Año escolar no encontrado</p>
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
          <CardHeader className="bg-indigo-600 text-white">
            <CardTitle className="text-2xl">Editar Año Escolar</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form action={updateSchoolYear} className="space-y-4">
              <input type="hidden" name="year_id" value={schoolYear.year_id} />
              <div className="space-y-2">
                <Label htmlFor="start_date">Fecha de Inicio</Label>
                <Input type="date" id="start_date" name="start_date" required defaultValue={schoolYear.start_date} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end_date">Fecha de Fin</Label>
                <Input type="date" id="end_date" name="end_date" required defaultValue={schoolYear.end_date} />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
                Actualizar Año Escolar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}