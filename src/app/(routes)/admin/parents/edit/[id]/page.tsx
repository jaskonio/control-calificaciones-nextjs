import EditParentForm from "@/app/components/parent/editParentForm"
import { parentService } from "@/services"


export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const model = await parentService.getById(id)


    return (
        <EditParentForm id={id} defaultValues={model}></EditParentForm>
    )
}