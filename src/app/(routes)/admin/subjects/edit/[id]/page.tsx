import { subjectsService } from "@/services"
import EditSubjectForm from "@/app/components/subjects/editSubjectForm"

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const subject = await subjectsService.getById(id)

  return (
    <EditSubjectForm id={id} defaultValues={subject}></EditSubjectForm>
  )
}