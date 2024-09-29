import SchoolYearsContent from "@/app/components/school/schoolYearContent";
import SchoolYearLoadingSkeleton from "@/app/components/school/schoolYearLoadingSkeleton";
import TeacherHomeContent from "@/app/components/teacher/teacherHomeContent";
import { Suspense } from "react";

export default async function SchoolYearsList() {

  return (
    <Suspense fallback={<SchoolYearLoadingSkeleton/>}>
      <TeacherHomeContent></TeacherHomeContent>
    </Suspense>

  )
}