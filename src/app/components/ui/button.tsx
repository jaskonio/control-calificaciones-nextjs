import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function DeleteButton() {
    return (
        <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    );
}


export function UpdateButton({href}: {href:string}) {
   
    return (
        <Link
            href={href}
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <PencilIcon className="w-5" />
        </Link>
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