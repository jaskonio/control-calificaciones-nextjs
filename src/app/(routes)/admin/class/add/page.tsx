import CreateClassForm from "@/app/components/class/createClassForm";
import { coursesService, subjectsService, teacherService } from "@/services";


export default async function Page() {
  const courseOptions = await coursesService.getAllOptions('id', 'name')
  const subjectOptions = await subjectsService.getAllOptions('id', 'name')
  const teacherOptions = await teacherService.getAllOptions('id', 'name')

  return (
    <CreateClassForm courseOptions={courseOptions} subjectOptions={subjectOptions} teacherOptions={teacherOptions}></CreateClassForm>
  )
}