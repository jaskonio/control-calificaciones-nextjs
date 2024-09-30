import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Users, GraduationCap, UserCheck } from 'lucide-react'
import { Separator } from "@/components/ui/separator";


export default async function HomeContent() {
    await new Promise(resolve => setTimeout(resolve, 500))

    const adminCards = [
        { title: 'Años Escolares', description: 'Gestiona los períodos académicos', icon: BookOpen, href: '/school', color: 'bg-blue-500' },
        { title: 'Tutores', description: 'Administra la información de los tutores', icon: Users, href: '/tutors', color: 'bg-green-500' },
        { title: 'Docentes', description: 'Gestiona el personal docente', icon: GraduationCap, href: '/teachers', color: 'bg-yellow-500' },
        { title: 'Estudiantes', description: 'Administra la información de los estudiantes', icon: UserCheck, href: '/students', color: 'bg-purple-500' },
    ]

    return (
        <main className="container mx-auto">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16 text-primary">Sistema de Gestión Escolar</h1>
            
            <Separator className="my-4" />
            <h1 className="text-3xl font-bold text-center mb-16 text-secondary">Administración</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminCards.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 border-accent1 border-opacity-20 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-accent2">
                            <item.icon className="h-12 w-12 text-accent3" />
                            {item.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                        <CardDescription className="text-secondary mb-6">{item.description}</CardDescription>
                        <Button asChild className="w-full bg-accent2 transition-colors duration-300 hover:bg-accent1-dark">
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
