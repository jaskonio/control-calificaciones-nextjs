import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


type BaseCardProps = {
    title: string;
    content: any
}

export function BaseCard({ title, content}: BaseCardProps) {
    return (
        <Card className="max-w-md mx-auto">
        <CardHeader className="bg-accent3 text-white text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
            {content}
        </CardContent>
      </Card>
    )
}