"use client"

import { FormSubmitButton } from "@/app/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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


const formSchema = z.object({
    course_id: z.number(),
    name: z.string().min(2, {
        message: "El nombre de la clase debe tener mas de 2 carecteres.",
    }),
    parallel: z.string()
  })

export default function CourseForm({course_id, name, parallel, submitHandler }: {course_id:number, name: string, parallel: string, submitHandler: any}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        course_id: course_id,
        name: name,
        parallel: parallel
    },
  })

  function courseOnSubmit(values: z.infer<typeof formSchema>) {
    submitHandler(values)
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(courseOnSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
              control={form.control}
              name="parallel"
              render={({ field }) => (
              <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                      <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoria" />
                      </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                  </SelectContent>
                  </Select>
                  <FormMessage />
              </FormItem>
              )}
            />

            <FormSubmitButton />
        </form>
    </Form>
  )
}