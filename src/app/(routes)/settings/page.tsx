import { Separator } from "@/components/ui/separator";
import ProfileForm from "./profile-form";
import { auth } from "@/auth";
import { userService } from "@/services";

export default async function Page() {
    const session = await auth()

    if (!session || !session.user || !session.user.email || !session.user.name) return null

    const user = await userService.getByEmailAndPasword(session.user.email, session.user.name)

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