import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserX } from "lucide-react";
import Link from "next/link";


type ResoucesNotFoundProps = {
    title: string;
    description: string;
    content: string;
    prevhref: string;
    prevhrefMessage: string;
}
export function ResoucesNotFound({title, description, content, prevhref, prevhrefMessage}: ResoucesNotFoundProps) {
    return (
        <Card className="max-w-md w-full">
            <CardHeader className="text-center">
                <div className="mx-auto bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <UserX className="h-8 w-8 text-red-600" />
                </div>
            <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
            <CardDescription className="text-gray-600">
                {description}
            </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-600">
                    {content}
                </p>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
                <Link href="/">
                    <Button variant="default" className="bg-primary text-white">Volver al inicio</Button>
                </Link>

                <Link href={prevhref}>
                    <Button variant="outline">{prevhrefMessage}</Button>
                </Link>
            </CardFooter>
        </Card>
    )

}