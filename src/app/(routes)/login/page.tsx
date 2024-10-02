import { BaseCard } from "@/app/components/ui/cards"
import LoginForm from "@/app/components/login/loginForm"

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Login"
        content={(
          <LoginForm></LoginForm>
        )}
      ></BaseCard>
    </div>
  )
}