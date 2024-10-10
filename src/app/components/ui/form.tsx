"use client";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { BaseCard } from "./cards";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

const NumberInput = ({ form, name, label, placeholder }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="mb-4">
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                type="number"
                id={name}
                placeholder={placeholder}
                {...register(name)}
                className={errors[name] ? "border-red-500" : ""}
            />
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
            )}
        </div>
    );
};

const TextInput = ({ form, name, label, placeholder }) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input type="text" {...field} placeholder={placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const SelectInput = ({ form, name, label, options }) => {
    return (
        <div className="mb-4">
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona del año academico" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {options.map((option, index) => (
                                    <SelectItem key={index} value={option.value}>{option.label}</SelectItem>)
                                )}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const DateInput = ({ form, name, label, placeholder }) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const inputComponents = {
    text: TextInput,
    number: NumberInput,
    select: SelectInput,
    date: DateInput
};

const GenericForm = ({ schema, fields, onSubmit, defaultValues, submitButtonText = "Enviar" }) => {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues
    });

    const renderField = (field) => {
        const Component = inputComponents[field.type];
        if (!Component) {
            console.warn(`Componente para el tipo "${field.type}" no está definido.`);
            return null;
        }

        return (
            <Component
                form={form}
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                options={field.options}
            />
        );
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
                {fields.map((field) => renderField(field))}
                <Button type="submit" className="mt-4">
                    {submitButtonText}
                </Button>
            </form>
        </Form>
    );
};

type GenericCardForm = {
    title: string,
    schema: any,
    fields: any,
    onSubmit: any,
    defaultValues?: any,
    submitButtonText: string
}
const GenericCardForm = ({ title, schema, fields, onSubmit, defaultValues, submitButtonText = "Enviar" }: GenericCardForm) => {
    return (
        <BaseCard
            title={title}
            content={(
                <GenericForm
                    fields={fields}
                    onSubmit={onSubmit}
                    schema={schema}
                    defaultValues={defaultValues}
                    submitButtonText={submitButtonText}></GenericForm>)}
        ></BaseCard>
    );
};

export { NumberInput, TextInput, SelectInput, GenericForm, GenericCardForm };