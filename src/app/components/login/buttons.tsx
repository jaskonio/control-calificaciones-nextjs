import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { LogIn, LogOut } from "lucide-react"
import Link from "next/link"
 

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

export function SignOutButton() {
    return (
        <form
        action={async (formData) => {
            "use server"
            await signOut({redirectTo: '/'})}}
        >
            <Button type="submit" variant="outline" className="bg-accent2 hover:bg-accent text-white">
                <LogOut className="h-4 w-4" />
                <span>Cerra sesión</span>
            </Button>
        </form>
    )
}

export async function AuthButton(){
    "use server";

    const session = await auth();
    console.log(session)
    if (!session) {
        return (<SignInButton></SignInButton>)
    }

    return (<SignOutButton></SignOutButton>)
}