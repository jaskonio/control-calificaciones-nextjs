'use client'

import { CustomErrorHomePage } from "@/app/components/ui/error";
import { useRouter } from "next/navigation";

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