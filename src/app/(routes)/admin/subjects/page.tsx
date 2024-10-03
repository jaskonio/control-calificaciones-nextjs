import SubjectsTableList from "@/app/components/subjects/subjectsTableList";
import { BaseTableLoadingSkeleton } from "@/app/components/ui/table";
import { Suspense } from "react";


export default async function Page() {

  return (
    <Suspense fallback={<BaseTableLoadingSkeleton/>}>
      <SubjectsTableList></SubjectsTableList>
    </Suspense>

  )
}