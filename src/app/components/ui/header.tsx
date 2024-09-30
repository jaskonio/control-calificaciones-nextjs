import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GraduationCap, LogIn } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-accent2" />
            <span className="text-3xl font-bold text-accent3">GestiónEscolar</span>
          </Link>
          <Button variant="outline" className="bg-accent2 hover:bg-accent text-white">
            <LogIn className="h-4 w-4" />
            <span>Iniciar Sesión</span>
          </Button>
        </div>
      </div>
    </header>
  )
}