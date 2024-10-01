import { addSchoolYear } from "@/actions/schoolActions";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BaseCard } from "@/app/components/ui/cards";
import { FormSubmitButton } from "@/app/components/ui/button";

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
          <FormSubmitButton />
        </form>
        )}
      ></BaseCard>
    </div>
  )
}