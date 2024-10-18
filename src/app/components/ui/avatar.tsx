import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";


export function AvatarPopover({userInfo}: { userInfo: any}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback className="font-bold text-gray-600">{userInfo.name.slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{ userInfo.name }</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem><Link href="/admin">Panel administración</Link></DropdownMenuItem>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Preferencias</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <button onClick={() => signOut({redirectTo: "/"})}>cerrar sesión</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
