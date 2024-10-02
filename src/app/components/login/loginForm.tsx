import { signIn } from "@/auth"


export default function LoginForm() {
  async function credentialsAction(formData: FormData) {
    "use server"
    // try {
      const response = await signIn("credentials", {
        username: formData.get('username') as string, 
        password: formData.get('password') as string, 
        redirectTo: '/admin'
      })
      console.log("response signIn")
      console.log(response)
    // } catch(error) {
    //   console.log(error)
    // }
  }

  return (
    <form action={credentialsAction}>
      <label htmlFor="credentials-email">
        Email
        <input type="text" id="credentials-username" name="username" />
      </label>
      <label htmlFor="credentials-password">
        Password
        <input type="password" id="credentials-password" name="password" />
      </label>
      <input type="submit" value="Sign In" />
    </form>
  )
}