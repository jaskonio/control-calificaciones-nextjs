import { schoolService } from "@/services"
import EditSchoolForm from "@/app/components/school/editSchoolForm"
import { formatDateToString } from "@/lib/utils"


export default async function Page({ params }: { params: { id: string } }) {
  const schoolYear = await schoolService.getById(parseInt(params.id))
  console.log("result getById")
  console.log(schoolYear)

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

  return (
    <EditSchoolForm id={Number(params.id)} defaultValues={schoolYear} ></EditSchoolForm>
  )
}