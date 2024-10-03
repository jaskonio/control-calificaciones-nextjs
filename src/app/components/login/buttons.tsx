"use client";


import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import Link from "next/link"
import { AvatarPopover } from "../ui/avatar"
import { useSession } from "next-auth/react"


export function SignInButton() {
    return (
        <Link href="/login">
            <Button variant="outline" className="bg-accent2 hover:bg-accent text-white">
                <LogIn className="h-4 w-4" />
                <span>Iniciar Sesión</span>
            </Button>
        </Link>
    )
}

export function AuthButton(){
    const { data: session } = useSession()
    console.log(session)
    if (!session) {
        return (<SignInButton></SignInButton>)
    }

    return (<AvatarPopover userInfo={session.user}></AvatarPopover>)
}