import { classRoomService } from "@/services"
import EditClassRoomForm from "@/app/components/classRoom/editClassRoomForm"

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await classRoomService.getById(id)

  return (
    <EditClassRoomForm
      id={id}
      defaultValues={model}></EditClassRoomForm>
  )
}