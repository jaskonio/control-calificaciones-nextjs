import { Button } from '@/components/ui/button';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Edit, PlusCircle, Trash2 } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function AddButton({href}: {href:string}) {
    return (
        <Link href={href}>
            <Button className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
                <PlusCircle className="h-4 w-4" />
                </Button>
        </Link>
    )
}

export function EditButton({href}: {href:string}) {
    return (
        <Link href={href}>
            <Button variant="outline" size="sm" className='bg-white'>
                <Edit className="h-4 w-4" />
            </Button>
        </Link>
    )
}

export function DeleteButton({action, formInputName, entityId}: {action:any, formInputName: string, entityId: string}) {
    return (
        <form action={action}>
            <input type="hidden" name={formInputName} value={entityId} />
            <Button type="submit" variant="destructive" size="sm">
            <Trash2 className="h-4 w-4" />
        </Button>
        </form>
    );
}

export function CreateButton({href, placeholder}: {href:string, placeholder:string}) {
    return (
        <Link
            href={href}
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">{placeholder}</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function LoginButton() {
    'use client';

    return (
        <button
        className="bg-white text-black px-4 py-2 rounded-md mt-4"
        onClick={() => signOut()}
      >
        Logout
      </button>
    )
}

export function Infouser() {
    return (
        <div>
            Infouser
        </div>
    )
}