import { FieldConfig, FieldType } from "../ui/form";


const ParentFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Nombre",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Email,
        name: "email",
        label: "Correo",
        placeholder: "Ingresa tu correo",
    },
    {
        type: FieldType.Password,
        name: "password",
        label: "Password",
        placeholder: "Ingresa tu password",
    },
    {
        type: FieldType.Select,
        name: "status",
        label: "Estado usuario",
        options: [
            { label: "Activo", value: "active" },
            { label: "incativo", value: "inactive" },
        ],
    },
    {
        type: FieldType.Text,
        name: "address",
        label: "Dirección",
        placeholder: "Introduce una dirección",
    },
    {
        type: FieldType.Phone,
        name: "phone",
        label: "Telefono",
        placeholder: "Ingresa un Telefono",
    }
];

export default ParentFields;