import { schoolService, scheduleService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import CreateEventForm from "@/app/components/event/createEventForm"


export default async function Page() {
  const acemicYears = await schoolService.getAll()
  const acemicYearsOptions: SelectOption[] = acemicYears.map(o => {
    return {
      label: o.name,
      value: o.id.toString()
    }
  })
 
  const schedules = await scheduleService.getAll()
  const schedulesOptions: SelectOption[] = schedules.map(o => {
    return {
      label: o.startTime + o.endTime,
      value: o.id.toString()
    }
  })

  return (
    <CreateEventForm acemicYearsOptions={acemicYearsOptions} schedulesOptions={schedulesOptions}></CreateEventForm>
  )
}