import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">EduGest</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <Link href="/about" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Acerca de
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Contacto
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-300">
              Términos de Uso
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduGest. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}