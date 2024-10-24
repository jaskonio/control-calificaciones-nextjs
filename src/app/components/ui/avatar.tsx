import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";


interface NavItem {
    title: string;
    description: string;
    href: string;
    roles: string;
}

const itemsConf: NavItem[] = [
    {
        title: 'Panel administración',
        description: 'xxx',
        href: '/admin',
        roles: 'admin',
    },
    {
        title: 'Settings',
        description: '',
        href: '/settings',
        roles: ''
    }
];

function filterItemsByRole(items: NavItem[], userRole: string): NavItem[] {
    return items.filter(item => item.roles === '' || item.roles === userRole);
}

export function AvatarPopover({ userInfo }: { userInfo: any }) {
    const itemsConfFiltered = filterItemsByRole(itemsConf, userInfo.role)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback className="font-bold text-gray-600">{userInfo.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{userInfo.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {
                    itemsConfFiltered.map((item, index) => (
                        <DropdownMenuItem key={index}>
                            <Link href={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                    ))
                }

                <DropdownMenuSeparator />
                <DropdownMenuItem >
                    <button onClick={() => signOut({ redirectTo: "/" })}>cerrar sesión</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
