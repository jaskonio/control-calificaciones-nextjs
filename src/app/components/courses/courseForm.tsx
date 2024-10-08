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
import SelectAcademicYear from "../school/comboSelect"
import { AcademicYear } from "@prisma/client"


const formSchema = z.object({
    id: z.number(),
    name: z.string().min(2, {
        message: "El nombre de la clase debe tener mas de 2 carecteres.",
    }),
    description: z.string().min(2, {
      message: "El nombre de la clase debe tener mas de 2 carecteres.",
    }),
    gradeLevel: z.string().min(2, {
      message: "El nombre de la clase debe tener mas de 2 carecteres.",
    }),
    status: z.string().min(2, {
      message: "El nombre de la clase debe tener mas de 2 carecteres.",
    }),
    academicYearId: z.string().transform( (v) => Number(v) || 0),
  })

type CourseFormProps = {
  id?: number,
  name?: string,
  description?: string,
  gradeLevel?: string,
  status?: string,
  academicYearAvailables: AcademicYear[]
  submitHandler: any,
}

export default function CourseForm({id=0, name='', description='', gradeLevel='', status='inactive', academicYearAvailables=[], submitHandler }: CourseFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        id: id,
        name: name,
        description: description,
        gradeLevel: gradeLevel,
        status: status,
        academicYearId: academicYearAvailables[0].id
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
                name="description"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="gradeLevel"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Nombre Grado</FormLabel>
                    <FormControl>
                    <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
              control={form.control}
              name="academicYearId"
              render={({ field }) => (
              <FormItem>
                  <FormLabel>Año academino</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                  <FormControl>
                      <SelectTrigger>
                      <SelectValue placeholder="Selecciona del año academico" />
                      </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {academicYearAvailables.map(acedemicYear => (
                      <SelectItem key={acedemicYear.id} value={acedemicYear.id.toString()}>{acedemicYear.name}</SelectItem>)
                    )}
                  </SelectContent>
                  </Select>
                  <FormMessage />
              </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
              <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                      <SelectTrigger>
                      <SelectValue placeholder="Selecciona un estado" />
                      </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                      <SelectItem value="active">Activo</SelectItem>
                      <SelectItem value="inactive">Incativo</SelectItem>
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