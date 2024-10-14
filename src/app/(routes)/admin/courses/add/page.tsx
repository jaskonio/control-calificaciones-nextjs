import { schoolService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import CreateCourseForm from "@/app/components/courses/createCourseForm"


export default async function Page() {
  const academicYearViewModels = await schoolService.getAll()
  const academicYearOptions: SelectOption[] = academicYearViewModels.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  return (
    <CreateCourseForm academicYearOptions={academicYearOptions}></CreateCourseForm>
  )
}