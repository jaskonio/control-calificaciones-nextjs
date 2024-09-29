import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GraduationCap, LogIn } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">GestiónEscolar</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/school" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Años Escolares
            </Link>
            <Link href="/tutors" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Tutores
            </Link>
            <Link href="/teachers" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Docentes
            </Link>
            <Link href="/students" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Estudiantes
            </Link>
          </nav>
          <Button variant="outline" className="flex items-center space-x-2">
            <LogIn className="h-4 w-4" />
            <span>Iniciar Sesión</span>
          </Button>
        </div>
      </div>
    </header>
  )
}