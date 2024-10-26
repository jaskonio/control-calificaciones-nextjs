import { Separator } from "@/components/ui/separator";
import ProfileForm from "./profile-form";
import { userService } from "@/services";
import { GetUserId } from "@/actions/sessionActions";

export default async function Page() {
    const userId = await GetUserId()
    const user = await userService.getById(userId)

    if (!user) return null

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Perfil</h3>
                <p className="text-sm text-muted-foreground">
                    Administra las configuraciones personales.
                </p>
            </div>
            <Separator />
            <ProfileForm id={user.id} data={user}></ProfileForm>
        </div>
    );
}