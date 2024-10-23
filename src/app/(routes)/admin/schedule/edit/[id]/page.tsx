import { eventService, classRoomService, classService, scheduleService } from "@/services"
import EditScheduleForm from "@/app/components/schedule/editScheduleForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await scheduleService.getById(id)

  const classroomOptions = await classRoomService.getAllOptions('id', 'name')
  const classOptions = await classService.getAllOptions('id', 'comments')
  const eventOptions = await eventService.getAllOptions('id', 'title')

  return (
    <EditScheduleForm id={id} defaultValues={model}
      classroomOptions={classroomOptions}
      classOptions={classOptions}
      eventOptions={eventOptions}
    ></EditScheduleForm>
  )
}