import { addSchoolYear } from "@/lib/schoolActions";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BaseCard } from "@/app/components/ui/cards";

export default function AddSchoolYear() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Añadir Año Escolar"
        content={(
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
          Añadir
          </Button>
        </form>
        )}
      ></BaseCard>
    </div>
  )
}