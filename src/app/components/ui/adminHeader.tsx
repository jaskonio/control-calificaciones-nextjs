import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GraduationCap, LogIn } from 'lucide-react'

export default function AdminHeader() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="text-3xl font-bold text-accent">GestiónEscolar</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/school" className="text-accent hover:text-accent transition-colors duration-300">
              Años Escolares
            </Link>
            <Link href="/tutors" className="text-accent hover:text-accent transition-colors duration-300">
              Tutores
            </Link>
            <Link href="/teachers" className="text-accent hover:text-accent transition-colors duration-300">
              Docentes
            </Link>
            <Link href="/students" className="text-accent hover:text-accent transition-colors duration-300">
              Estudiantes
            </Link>
          </nav>
          <Button variant="outline" className="bg-accent hover:bg-accent-dark text-white">
            <LogIn className="h-4 w-4" />
            <span>Iniciar Sesión</span>
          </Button>
        </div>
      </div>
    </header>
  )
}