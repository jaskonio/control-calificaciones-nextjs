import SchoolYearsContent from "@/app/components/school/schoolYearContent";
import { BaseTableLoadingSkeleton } from "@/app/components/ui/table";
import { Suspense } from "react";


export default async function Page() {

  return (
    <Suspense fallback={<BaseTableLoadingSkeleton/>}>
      <SchoolYearsContent></SchoolYearsContent>
    </Suspense>

  )
}