"use client";

import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { AuthButton } from '../login/buttons'
import { usePathname } from 'next/navigation'


export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="text-3xl font-bold text-accent">GestiónEscolar</span>
          </Link>
            { pathname != '/login' && <AuthButton></AuthButton>}
        </div>
      </div>
    </header>
  )
}