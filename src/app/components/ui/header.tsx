import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { LoginButton } from './button'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-accent2" />
            <span className="text-3xl font-bold text-accent3">GestiónEscolar</span>
          </Link>
          <LoginButton></LoginButton>
        </div>
      </div>
    </header>
  )
}