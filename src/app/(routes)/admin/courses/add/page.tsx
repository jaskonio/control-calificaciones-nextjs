import { schoolService } from "@/services"
import CreateCourseForm from "@/app/components/courses/createCourseForm"


export default async function Page() {
  const academicYearOptions = await schoolService.getAllOptions('id', 'name')

  return (
    <CreateCourseForm academicYearOptions={academicYearOptions}></CreateCourseForm>
  )
}