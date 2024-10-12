'use client'


import { CustomErrorHomePage } from "@/app/components/ui/error";


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <CustomErrorHomePage message="No pudimos cargar el contenido. Por favor, intenta de nuevo." reset={reset}></CustomErrorHomePage>
    )
}