import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";

type BaseCardProps = {
  title: string;
  content?: any
}

export function BaseCard({ title, content }: BaseCardProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {content}
      </CardContent>
    </Card>
  )
}

export function BaseCardLoadingSkeleton() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="bg-indigo-200">
        <CardTitle className="text-2xl text-white">
          <Skeleton className="h-8 w-48 bg-indigo-100" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </form>
      </CardContent>
    </Card>
  )
}