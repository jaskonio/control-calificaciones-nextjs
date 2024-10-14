import { FieldConfig, FieldType } from "../ui/form";


const SchoolFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Nombre del año escolar",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Date,
        name: "startDate",
        label: "Fecha Inicio",
        placeholder: "Ingresa tu edad",
    },
    {
        type: FieldType.Date,
        name: "endDate",
        label: "Fecha fin",
        placeholder: "Ingresa tu edad",
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
];

export default SchoolFields;