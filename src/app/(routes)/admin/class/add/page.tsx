import CreateClassForm from "@/app/components/class/createClassForm";
import { SelectOption } from "@/app/components/ui/form";
import { coursesService, subjectsService, teacherService } from "@/services";


export default async function Page() {
  const courses = await coursesService.getAll()
  const subjects = await subjectsService.getAll()
  const teachers = await teacherService.getAll()

  const courseOptions: SelectOption[] = courses.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  const subjectOptions: SelectOption[] = subjects.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  const teacherOptions: SelectOption[] = teachers.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  return (
    <CreateClassForm courseOptions={courseOptions} subjectOptions={subjectOptions} teacherOptions={teacherOptions}></CreateClassForm>
  )
}