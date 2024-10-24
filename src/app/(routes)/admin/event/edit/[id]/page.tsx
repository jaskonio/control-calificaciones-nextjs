import { schoolService, scheduleService, eventService } from "@/services"
import EditEventForm from "@/app/components/event/editEventForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await eventService.getById(id)

  const acemicYearsOptions = await schoolService.getAllOptions('id', 'name')
  const schedulesOptions = await scheduleService.getAllOptions('id', 'label')


  return (
    <EditEventForm id={id} defaultValues={model} acemicYearsOptions={acemicYearsOptions} schedulesOptions={schedulesOptions}></EditEventForm>
  )
}