import { settingService } from "@/services"
import EditSettingForm from "@/app/components/setting/editSettingForm"


export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const model = await settingService.getById(id)


  return (
    <EditSettingForm id={id} defaultValues={model}></EditSettingForm>
  )
}