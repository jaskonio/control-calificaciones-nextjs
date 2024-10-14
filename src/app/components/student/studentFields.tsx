import { FieldConfig, FieldType } from "../ui/form";


const StudentFields: FieldConfig[] = [
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
        label: "Estado",
        options: [
            { label: "Activo", value: "active" },
            { label: "incativo", value: "inactive" },
        ],
    },
    {
        type: FieldType.Date,
        name: "birthDate",
        label: "Fecha de Nacimiento",
        placeholder: "Introduce fecha de nacimiento",
    },
    {
        type: FieldType.Text,
        name: "address",
        label: "Direccion",
        placeholder: "Ingresa tu Direccion",
    },
    {
        type: FieldType.Phone,
        name: "phone",
        label: "Telefono",
        placeholder: "Ingresa tu Telefono",
    },
    {
        type: FieldType.Text,
        name: "gradeLevel",
        label: "Grado",
        placeholder: "Ingresa el grado",
    },
];

export default StudentFields;