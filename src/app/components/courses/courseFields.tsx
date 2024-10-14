import { FieldConfig, FieldType } from "../ui/form";

const CourseFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Nombre del Curso",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Añade una descripción",
        placeholder: "Ingresa una descripción",
    },
    {
        type: FieldType.Text,
        name: "gradeLevel",
        label: "Nivel",
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
    },
    {
        type: FieldType.Select,
        name: "academicYearId",
        label: "Seleccionar Año academico",
        options: [], // Fill with AcademicYearId
    },
]

export default CourseFields;