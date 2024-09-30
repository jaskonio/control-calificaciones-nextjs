import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateTeacher } from "@/lib/teacherActions"
import { teacherService } from "@/lib/services"
import { BaseCard } from "@/app/components/ui/cards"
import { FormSubmitButton } from "@/app/components/ui/button"
import { ResoucesNotFound } from "@/app/components/ui/errors"


export default async function EditTeacher({ params }: { params: { id: string } }) {
  const teacher = await teacherService.getById(parseInt(params.id))

  if (!teacher) {
    return (
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ResoucesNotFound 
            title="Docente no encontrado"
            content="Lo sentimos, no pudimos encontrar el docente que estás buscando."
            description="Es posible que el docente haya sido eliminado o que la URL sea incorrecta. Por favor, verifica la información e intenta nuevamente."
            prevhref="/teachers"
            prevhrefMessage="Ver todos los docentes"
          />
        </div>
    )
  }

  return (
      <div className="container mx-auto px-4">
        <BaseCard
          title="Editar Docente Escolar"
          content={(
            <form action={updateTeacher} className="space-y-4">
              <input type="hidden" name="role" value="teacher" />
              <input type="hidden" name="teacher_id" value={teacher.teacher_id} />
              <input type="hidden" name="user_id" value={teacher.user_id} />

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
              <FormSubmitButton />
          </form>
          )}
        ></BaseCard>
      </div>
  )
}