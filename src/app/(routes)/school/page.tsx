import SchoolYearsContent from "@/app/components/ui/schoolYearContent";
import SchoolYearLoadingSkeleton from "@/app/components/ui/schoolYearLoadingSkeleton";
import { Suspense } from "react";

export default async function SchoolYearsList() {

  return (
    <Suspense fallback={<SchoolYearLoadingSkeleton/>}>
      <SchoolYearsContent></SchoolYearsContent>
    </Suspense>

  )
}