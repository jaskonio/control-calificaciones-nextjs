import { addSubjects } from "@/actions/subjectsActions";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BaseCard } from "@/app/components/ui/cards";
import { FormSubmitButton } from "@/app/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Asignaturas"
        content={(
        <form action={addSubjects} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descripcion</Label>
            <Input type="text" id="description" name="description" required />
          </div>
          <FormSubmitButton />
        </form>
        )}
      ></BaseCard>
    </div>
  )
}