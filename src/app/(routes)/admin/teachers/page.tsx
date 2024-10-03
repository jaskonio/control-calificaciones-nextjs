import TeacherHomeContent from "@/app/components/teacher/teacherHomeContent";
import { BaseTableLoadingSkeleton } from "@/app/components/ui/table";
import { Suspense } from "react";

export default async function Page() {

  return (
    <Suspense fallback={<BaseTableLoadingSkeleton/>}>
      <TeacherHomeContent></TeacherHomeContent>
    </Suspense>

  )
}