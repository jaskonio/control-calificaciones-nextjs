import { attendanceService, scheduleService, studentService, subjectsService } from "@/services"
import EditAttendanceForm from "@/app/components/attendace/editAttendanceForm"


export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id)
    const model = await attendanceService.getById(id)

    const scheduleOptions = await scheduleService.getAllOptions('id', 'description')
    const studentOptions = await studentService.getAllOptions('id', 'name')
    const subjectOptions = await subjectsService.getAllOptions('id', 'name')


    return (
        <EditAttendanceForm id={id} defaultValues={model} scheduleOptions={scheduleOptions} studentOptions={studentOptions} subjectOptions={subjectOptions}></EditAttendanceForm>
    )
}