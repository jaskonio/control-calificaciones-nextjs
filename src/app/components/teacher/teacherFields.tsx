import { FieldConfig, FieldType } from "../ui/form";


const TeacherFields: FieldConfig[] = [
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
        name: "statusUser",
        label: "Estado usuario",
        options: [
            { label: "Activo", value: "active" },
            { label: "incativo", value: "inactive" },
        ],
    },
    {
        type: FieldType.Text,
        name: "expertise",
        label: "Experiencia",
        placeholder: "Introduce tu experiencia",
    },
    {
        type: FieldType.Phone,
        name: "phone",
        label: "Telefono",
        placeholder: "Ingresa tu Telefono",
    },
    {
        type: FieldType.Text,
        name: "address",
        label: "Direccion",
        placeholder: "Ingresa tu Direccion",
    },

    {
        type: FieldType.Date,
        name: "hireDate",
        label: "Fecha de contratacíon",
        placeholder: "Ingresa la fecha de contratación",
    },
    {
        type: FieldType.Select,
        name: "status",
        label: "Estado",
        options: [
            { label: "Activo", value: "active" },
            { label: "incativo", value: "inactive" },
        ],
    }
];

export default TeacherFields;