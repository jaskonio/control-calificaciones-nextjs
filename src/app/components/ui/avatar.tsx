import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth, signOut } from "@/auth";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";


export async function AvatarPopover() {
    let username = "Username"

    const session = await auth();

    console.log(session);

    if (session?.user?.name) {
        username = session.user.name;
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback className="font-bold text-gray-600">{username.slice(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{ username }</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Preferencias</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <form
                        action={async() => {
                            "use server" 
                            await signOut({redirectTo:'/'})
                        }}>
                        <button type="submit">cerrar sesión</button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
