import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, UserCheck, House, BookOpenText, CalendarRange } from 'lucide-react'
import { Separator } from "@/components/ui/separator";


export default async function HomeContent() {
    await new Promise(resolve => setTimeout(resolve, 500))

    const adminCards = [
        { title: 'Años Escolares', description: 'Gestiona los períodos académicos', icon: CalendarRange, href: '/admin/school' },
        { title: 'Docentes', description: 'Gestiona el personal docente', icon: GraduationCap, href: '/admin/teachers' },
        { title: 'Estudiantes', description: 'Administra la información de los estudiantes', icon: UserCheck, href: '/admin/students' },
        { title: 'Asignaturas', description: 'Administra la información de las asignaturas', icon: BookOpenText, href: '/admin/subjects' },
        { title: 'Clases', description: 'Administra la información de las clases', icon: House, href: '/admin/courses' },
    ]

    return (
        <main className="container mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {adminCards.map((item, index) => (
                        <Card key={index} className="overflow-hidden transition-all duration-300 border-accent border-opacity-20 hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-primary">
                                    <item.icon className="h-12 w-12" />
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <CardDescription className="text-primary mb-6">{item.description}</CardDescription>
                                <Button asChild className="w-full bg-accent-foreground transition-colors duration-300 hover:bg-accent-foreground">
                                    <Link href={item.href}>Acceder</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
