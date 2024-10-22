import { attendanceService, scheduleService, studentService, subjectsService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import EditAttendanceForm from "@/app/components/attendace/editAttendanceForm"


export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id)
    const model = await attendanceService.getById(id)

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
        <EditAttendanceForm id={id} defaultValues={model} scheduleOptions={scheduleOptions} studentOptions={studentOptions} subjectOptions={subjectOptions}></EditAttendanceForm>
    )
}