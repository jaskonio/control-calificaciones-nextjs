"use client";


import { Input } from "@/components/ui/input";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
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
import { ZodSchema } from "zod";
import { TimePicker } from "@/components/ui/data-picker";

export interface SelectOption {
    label: string;
    value: string;
}

export enum FieldType {
    Text = "text",
    Number = "number",
    Select = "select",
    Date = "date",
    Time = "time",
    Password = "password",
    Email = "email",
    Phone = "phone"
};

export type FieldConfig = {
    type: FieldType;
    name: string;
    label: string;
    placeholder?: string;
    options?: SelectOption[]; // Solo para tipo 'select'
}

type inputComponent = {
    form: UseFormReturn;
    fieldConfig: FieldConfig
}

const PhoneInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} placeholder={fieldConfig.placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
};

const EmailInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <FormControl>
                            <Input type="email" {...field} placeholder={fieldConfig.placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const PasswordInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} placeholder={fieldConfig.placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const NumberInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} placeholder={fieldConfig.placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
};

const TextInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <FormControl>
                            <Input type="text" {...field} placeholder={fieldConfig.placeholder} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

const SelectInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form.control}
                name={fieldConfig.name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>{fieldConfig.label}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={fieldConfig.placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {fieldConfig.options?.map((option, index) => (
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

const DateInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => {
                    // field.value = field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value
                    return (
                        <FormItem>
                            <FormLabel>{fieldConfig.label}</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </div>
    );
};

const TimeInput = ({ form, fieldConfig }: inputComponent) => {
    return (
        <div className="mb-4">
            <FormField
                control={form['control']}
                name={fieldConfig.name}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormLabel>{fieldConfig.label}</FormLabel>
                            <FormControl>
                                <TimePicker date={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                }}
            />
        </div>
    );
};

interface GenericFormProps<TFormValues extends FieldValues> {
    schema: ZodSchema<TFormValues>;
    fields: FieldConfig[];
    onSubmit: any;
    defaultValues?: any;
    submitButtonText?: string;
}

const GenericForm = <TFormValues extends FieldValues>({ schema, fields, onSubmit, defaultValues, submitButtonText = "Enviar" }: GenericFormProps<TFormValues>) => {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues
    });

    const renderField = (field: FieldConfig, index: number) => {
        if (field.type == FieldType.Text) return (<TextInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Number) return (<NumberInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Select) return (<SelectInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Date) return (<DateInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Time) return (<TimeInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Email) return (<EmailInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Password) return (<PasswordInput form={form} fieldConfig={field} key={index} />);
        if (field.type == FieldType.Phone) return (<PhoneInput form={form} fieldConfig={field} key={index} />);

        console.warn(`Componente para el tipo "${field.type}" no está definido.`);
        return null;
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
                {fields.map((field, index) => renderField(field, index))}
                <Button type="submit" className="mt-4">
                    {submitButtonText}
                </Button>
            </form>
        </Form>
    );
};

interface GenericCardFormProps<TFormValues extends FieldValues> extends GenericFormProps<TFormValues> {
    title: string;
}

const GenericCardForm = <TFormValues extends FieldValues>({ title, schema, fields, onSubmit, defaultValues, submitButtonText }: GenericCardFormProps<TFormValues>) => {
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

export { GenericForm, GenericCardForm };