import { FormSubmitButton } from "@/app/components/ui/button"
import { BaseCard } from "@/app/components/ui/cards"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTeacher } from "@/lib/teacherActions"

export default function AddTeacher() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Añadir Docente Escolar"
        content={(
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
          <FormSubmitButton />
        </form>
        )}
      ></BaseCard>
    </div>
  )
}