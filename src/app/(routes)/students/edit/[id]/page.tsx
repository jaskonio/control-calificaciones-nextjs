import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateTeacher } from "@/actions/teacherActions"
import { BaseCard } from "@/app/components/ui/cards"
import { FormSubmitButton } from "@/app/components/ui/button"
import { ResoucesNotFound } from "@/app/components/ui/errors"
import { studentService } from "@/services"


export default async function Page({ params }: { params: { id: string } }) {
  const student = await studentService.getById(parseInt(params.id))

  if (!student) {
    return (
        <div className="container mx-auto px-4 flex items-center justify-center">
          <ResoucesNotFound 
            title="Estudiante no encontrado"
            content="Lo sentimos, no pudimos encontrar el Estudiante que estás buscando."
            description="Es posible que el Estudiante haya sido eliminado o que la URL sea incorrecta. Por favor, verifica la información e intenta nuevamente."
            prevhref="/students"
            prevhrefMessage="Ver todos los Estudiantes"
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
              <input type="hidden" name="student_id" value={student.student_id} />
              <input type="hidden" name="user_id" value={student.user_id} />

              <div className="space-y-2">
                <Label htmlFor="first_name">Nombre</Label>
                <Input type="text" id="first_name" name="first_name" required defaultValue={student.first_name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Apellido</Label>
                <Input type="text" id="last_name" name="last_name" required defaultValue={student.last_name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birth_data">Fecha Nacimiento</Label>
                <Input type="date" id="birth_data" name="birth_data" required defaultValue={student.birth_data} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start_date">Username</Label>
                <Input type="text" id="name" name="name" required defaultValue={student.user.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input type="email" id="email" name="email" required defaultValue={student.user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" id="password" name="password" required defaultValue={student.user.password} />
              </div>
              <FormSubmitButton />
          </form>
          )}
        ></BaseCard>
      </div>
  )
}