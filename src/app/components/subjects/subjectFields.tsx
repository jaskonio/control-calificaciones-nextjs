import { FieldConfig, FieldType } from "../ui/form";


const SubjectFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Nombre",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Descripción",
        placeholder: "Ingresa una descripción",
    },
    {
        type: FieldType.Text,
        name: "gradeLevel",
        label: "Nivel Grado",
        placeholder: "Ingresa el nivel",
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

export default SubjectFields;