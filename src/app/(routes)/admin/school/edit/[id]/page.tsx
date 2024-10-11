import { schoolService } from "@/services"
import EditSchoolForm from "@/app/components/school/editSchoolForm"


export default async function Page({ params }: { params: { id: string } }) {
  const schoolYear = await schoolService.getById(parseInt(params.id))

  return (
    <EditSchoolForm id={Number(params.id)} defaultValues={schoolYear} ></EditSchoolForm>
  )
}