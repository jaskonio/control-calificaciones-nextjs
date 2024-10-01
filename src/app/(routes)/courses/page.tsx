import CoursesTableList from "@/app/components/courses/coursesTableList";
import { BaseTableLoadingSkeleton } from "@/app/components/ui/table";
import { Suspense } from "react";

export default async function Page() {

  return (
    <Suspense fallback={<BaseTableLoadingSkeleton/>}>
      <CoursesTableList></CoursesTableList>
    </Suspense>
  )
}