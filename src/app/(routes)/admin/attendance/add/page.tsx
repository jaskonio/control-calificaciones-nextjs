import { scheduleService, studentService, subjectsService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import CreateAttendanceForm from "@/app/components/attendace/createAttendanceForm"


export default async function Page() {
  const schedules = await scheduleService.getAll()
  const scheduleOptions: SelectOption[] = schedules.map(o => {
    return {
      label: o.description,
      value: o.id.toString()
    }
  })

  const students = await studentService.getAll()
  const studentOptions: SelectOption[] = students.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  const subjectes = await subjectsService.getAll()
  const subjectOptions: SelectOption[] = subjectes.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })

  return (
    <CreateAttendanceForm scheduleOptions={scheduleOptions} studentOptions={studentOptions} subjectOptions={subjectOptions}></CreateAttendanceForm>
  )
}