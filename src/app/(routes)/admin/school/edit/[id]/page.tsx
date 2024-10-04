import { FormSubmitButton } from "@/app/components/ui/button"
import { BaseCard } from "@/app/components/ui/cards"
import { ResoucesNotFound } from "@/app/components/ui/errors"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateSchoolYear } from "@/actions/schoolActions"
import { schoolService, teacherService } from "@/services"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeacherHomeContent from "@/app/components/teacher/teacherHomeContent"
import { TeacherDataTable } from "@/app/components/teacher/data-table"
import { TeacherColumns } from "@/app/components/teacher/columns"


export default async function Page({ params }: { params: { id: string } }) {
  const schoolYear = await schoolService.getById(parseInt(params.id))
  const teachers = await teacherService.getAll()

  const teachersSelected = []
  if (!schoolYear) {
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

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="teachers">Docentes</TabsTrigger>
          <TabsTrigger value="students">Estudiantes</TabsTrigger>
          <TabsTrigger value="tutor">Tutores</TabsTrigger>
          <TabsTrigger value="subjets">Asignaturas</TabsTrigger>
          <TabsTrigger value="course">Clases</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <BaseCard
            title="Editar Año Escolar"
            content={(
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
                <FormSubmitButton />
            </form>
            )}
          ></BaseCard>
        </TabsContent>
        <TabsContent value="teachers">
          <TeacherDataTable  columns={TeacherColumns()} data={teachers}></TeacherDataTable>
        </TabsContent>
        <TabsContent value="students">
            Asignar students
        </TabsContent>
        <TabsContent value="tutor">
            Asignar Tutores
        </TabsContent>
        <TabsContent value="subjets">
            Asignar subjets
        </TabsContent>
        <TabsContent value="course">
            Asignar Clases
        </TabsContent>
      </Tabs>
    </div>
  )
}