import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Users, BookOpen, Calendar, ClipboardList, UserCheck } from "lucide-react"


export default function Component() {
  return (
      <main className="container mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Sistema de Gestión Escolar Integral</h2>
          <p className="text-xl text-secondary mb-8">
            Administre eficientemente el año escolar, tutores, docentes, alumnos y el registro de calificaciones.
          </p>
          <Button size="lg" className="bg-accent2 hover:bg-accent2-dark text-white">
            Comenzar Ahora
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<School className="w-12 h-12 text-accent3" />}
            title="Gestión del Año Escolar"
            description="Administre fácilmente los años escolares, la base de todas las entidades del sistema."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-accent3" />}
            title="Administración de Usuarios"
            description="Cree y gestione cuentas para docentes, tutores y alumnos con permisos personalizados."
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-accent3" />}
            title="Gestión de Asignaturas y Cursos"
            description="Organice asignaturas, cursos y clases de manera eficiente."
          />
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-accent3" />}
            title="Asignaciones Flexibles"
            description="Asigne docentes, alumnos, tutores y asignaturas a años escolares específicos."
          />
          <FeatureCard
            icon={<ClipboardList className="w-12 h-12 text-accent3" />}
            title="Registro de Calificaciones"
            description="Sistema completo para el registro y visualización de calificaciones por asignatura y período."
          />
          <FeatureCard
            icon={<UserCheck className="w-12 h-12 text-accent3" />}
            title="Gestión de Roles"
            description="Defina roles específicos para administradores, docentes, tutores y alumnos."
          />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">¿Listo para optimizar la gestión de su escuela?</h2>
          <p className="text-xl text-secondary mb-8">
            Únase a las instituciones educativas que ya están mejorando su administración con Gestión Escolar.
          </p>
          <Button size="lg" className="bg-accent2 hover:bg-accent1-dark text-white">
            Solicitar una Demo
          </Button>
        </section>
      </main>
  )
}

type FeatureCardProps = {
  icon: any;
  title: any;
  description:any;
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-accent1 border-opacity-20">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-accent2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-secondary">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}