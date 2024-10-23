import { schoolService, scheduleService, eventService } from "@/services"
import { SelectOption } from "@/app/components/ui/form"
import EditEventForm from "@/app/components/event/editEventForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await eventService.getById(id)
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
    <EditEventForm id={id} defaultValues={model} acemicYearsOptions={acemicYearsOptions} schedulesOptions={schedulesOptions}></EditEventForm>
  )
}