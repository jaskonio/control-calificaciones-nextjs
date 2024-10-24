import { schoolService, scheduleService } from "@/services"
import CreateEventForm from "@/app/components/event/createEventForm"


export default async function Page() {
  const acemicYearsOptions = await schoolService.getAllOptions('id', 'name')
  const schedulesOptions = await scheduleService.getAllOptions('id', 'label')

  return (
    <CreateEventForm acemicYearsOptions={acemicYearsOptions} schedulesOptions={schedulesOptions}></CreateEventForm>
  )
}