import { schoolService } from "@/services"
import EditSchoolForm from "@/app/components/school/editSchoolForm"
import { formatDateToString } from "@/lib/utils"


export default async function Page({ params }: { params: { id: string } }) {
  const schoolYear = await schoolService.getById(parseInt(params.id))

  let defaultValues = {
    name: schoolYear?.name,
    startDate: '',
    endDate: '',
    status: schoolYear?.status
  }

  if (schoolYear?.startDate) {
    defaultValues.startDate = formatDateToString(schoolYear.startDate)
  }

  if (schoolYear?.endDate) {
    defaultValues.endDate = formatDateToString(schoolYear.endDate)
  }

  console.log(defaultValues)

  return (
    <EditSchoolForm id={Number(params.id)} defaultValues={defaultValues} ></EditSchoolForm>
  )
}