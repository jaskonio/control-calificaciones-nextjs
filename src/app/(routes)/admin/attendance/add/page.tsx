import { scheduleService, studentService, subjectsService } from "@/services"
import CreateAttendanceForm from "@/app/components/attendace/createAttendanceForm"


export default async function Page() {
  const scheduleOptions = await scheduleService.getAllOptions('id', 'description')
  const studentOptions = await studentService.getAllOptions('id', 'name')
  const subjectOptions = await subjectsService.getAllOptions('id', 'name')


  return (
    <CreateAttendanceForm scheduleOptions={scheduleOptions} studentOptions={studentOptions} subjectOptions={subjectOptions}></CreateAttendanceForm>
  )
}