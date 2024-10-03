import StudenHomeContent from "@/app/components/student/studentHomeContent";
import { BaseTableLoadingSkeleton } from "@/app/components/ui/table";
import { Suspense } from "react";

export default async function Page() {

  return (
    <Suspense fallback={<BaseTableLoadingSkeleton/>}>
      <StudenHomeContent></StudenHomeContent>
    </Suspense>

  )
}