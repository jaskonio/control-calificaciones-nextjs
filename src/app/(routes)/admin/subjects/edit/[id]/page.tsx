import { FormSubmitButton } from "@/app/components/ui/button"
import { BaseCard } from "@/app/components/ui/cards"
import { ResoucesNotFound } from "@/app/components/ui/errors"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateSubjects } from "@/actions/subjectsActions"
import { subjectsService } from "@/services"

export default async function Page({ params }: { params: { id: string } }) {
  const subject = await subjectsService.getById(parseInt(params.id))

  if (!subject) {
    return (
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ResoucesNotFound 
            title="Año escolar no encontrado"
            content="Lo sentimos, no pudimos encontrar el año escolar que estás buscando."
            description="Es posible que el año escolar haya sido eliminado o que la URL sea incorrecta. Por favor, verifica la información e intenta nuevamente."
            prevhref="/school"
            prevhrefMessage="Ver todos los años escolares"
          />
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
    <BaseCard
      title="Editar Año Escolar"
      content={(
        <form action={updateSubjects} className="space-y-4">
              <input type="hidden" name="subject_id" value={subject.subject_id} />

              <div className="space-y-2">
                <Label htmlFor="name">Fecha de Inicio</Label>
                <Input type="text" id="name" name="name" required defaultValue={subject.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Input type="text" id="description" name="description" required defaultValue={subject.description} />
              </div>
          <FormSubmitButton />
      </form>
      )}
    ></BaseCard>
  </div>

  )
}