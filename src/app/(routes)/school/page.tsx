import SchoolYearsContent from "@/app/components/school/schoolYearContent";
import SchoolYearLoadingSkeleton from "@/app/components/school/schoolYearLoadingSkeleton";
import { Suspense } from "react";

export default async function SchoolYearsList() {

  return (
    <Suspense fallback={<SchoolYearLoadingSkeleton/>}>
      <SchoolYearsContent></SchoolYearsContent>
    </Suspense>

  )
}