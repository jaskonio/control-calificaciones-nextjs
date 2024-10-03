'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormSubmitButton } from "../ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"


export default function LoginForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const formSchema = z.object({
    username: z.string().min(1, {
      message: "Debes escribir el nombre de usuario.",
    }),
    password: z.string().min(1, {
      message: "Debes escribir la contraseña.",
    }),
  })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true)

            const user = { 
                redirect: false,
                username: values.username,
                password: values.password
            }

            const response = await signIn('credentials', {...user})
            console.log(response)

            if (response?.error) {
                console.log("Error en signIn:", response.error)
                toast({
                    variant: "destructive",
                    title: "Error al inciar sesión",
                    description: "Usuario o contraseña invalido",
                  })
            } else {
                router.push('/admin')
            }
        } catch (error) {
            console.error(error)
            toast({
                variant: "destructive",
                title: "Error en el servidor",
                description: "Contacte con el administrador.",
              })
        }
        finally {
            setLoading(false)
        }
    };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  

  return (
    <Form {...form}>
      <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="contraseña" {...field} type="password"/>
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
        />

        <FormSubmitButton loading={loading}></FormSubmitButton>
      </form>
    </Form>
  )
}