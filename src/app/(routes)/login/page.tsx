"use client"

import { BaseCard } from "@/app/components/ui/cards"
import LoginForm from "@/app/components/login/loginForm"


export async function submitLoginForm(data: any) {
  console.log('Login:', data)
}

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <BaseCard
        title="Login"
        content={(
          <LoginForm submitHandler={submitLoginForm}></LoginForm>
        )}
      ></BaseCard>
    </div>
  )
}