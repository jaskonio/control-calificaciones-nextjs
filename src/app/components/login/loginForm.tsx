"use client"

import { FormSubmitButton } from "@/app/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"


const formSchema = z.object({
    username: z.string().min(4, "No puede estar vacio"),
    password: z.string().min(4, "No puede estar vacio")
})

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: '',
        password: ''
    },
  })

  function handlerOnSubmit(values: z.infer<typeof formSchema>) {
    console.log('handlerOnSubmit')
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handlerOnSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <div className="space-y-2">
            <FormLabel htmlFor="password">Password</FormLabel>
              <div className="relative">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                  <FormControl>
                  <Input {...field} type={ showPassword ? "password": "text" }/>

                  </FormControl>
                  <FormMessage />
                  </FormItem>
                )}
              />
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => {setShowPassword(!showPassword)}}>
                  {showPassword ? (<EyeIcon className="h-4 w-4" aria-hidden="true"></EyeIcon>) : (<EyeOffIcon className="h-4 w-4" aria-hidden="true"></EyeOffIcon>)}
                </Button>
              </div>
            </div>

            <FormSubmitButton />
        </form>
    </Form>
  )
}