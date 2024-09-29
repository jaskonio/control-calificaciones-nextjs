import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <Skeleton className="h-12 w-3/4 mx-auto mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-200">
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent className="pt-4">
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}