import { Button } from "@/components/ui/button"
import { CircleXIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function CustomErrorHomePage({
    message,
    reset,
}: {
    message: string,
    reset: () => void
}) {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
                <CircleXIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />

                <h1 className="text-2xl font-semibold mb-2">¡Algo salió mal!</h1>
                <p className="text-gray-600 mb-6">
                    { message }
                </p>

                <div className="flex justify-center space-x-4">
                    <Button variant="secondary" onClick={() => router.push('/admin')}>
                        Ir a la página de inicio
                    </Button>
                    <Button onClick={() => reset()}>
                        Reintentar
                    </Button>
                </div>
            </div>
        </div>
    )
}