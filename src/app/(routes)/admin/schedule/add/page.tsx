import { classRoomService, classService, eventService } from "@/services"
import CreateScheduleForm from "@/app/components/schedule/createScheduleForm"


export default async function Page() {
  const classroomOptions = await classRoomService.getAllOptions('id', 'name')
  const classOptions = await classService.getAllOptions('id', 'comments')
  const eventOptions = await eventService.getAllOptions('id', 'title')


  return (
    <CreateScheduleForm classroomOptions={classroomOptions} classOptions={classOptions} eventOptions={eventOptions}></CreateScheduleForm>
  )
}