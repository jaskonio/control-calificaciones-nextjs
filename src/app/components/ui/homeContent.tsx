import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Users, GraduationCap, UserCheck } from 'lucide-react'


export default async function HomeContent() {
    await new Promise(resolve => setTimeout(resolve, 500))

    const data = [
        { title: 'Años Escolares', description: 'Gestiona los períodos académicos', icon: BookOpen, href: '/school', color: 'bg-blue-500' },
        { title: 'Tutores', description: 'Administra la información de los tutores', icon: Users, href: '/tutors', color: 'bg-green-500' },
        { title: 'Docentes', description: 'Gestiona el personal docente', icon: GraduationCap, href: '/teachers', color: 'bg-yellow-500' },
        { title: 'Estudiantes', description: 'Administra la información de los estudiantes', icon: UserCheck, href: '/students', color: 'bg-purple-500' },
    ]

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Sistema de Gestión Escolar</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className={`${item.color} text-white`}>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <item.icon className="h-6 w-6" />
                        {item.title}
                    </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                    <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                    <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                        <Link href={item.href}>Acceder</Link>
                    </Button>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </div>
    );
}
