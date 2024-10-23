import { FieldConfig, FieldType } from "../ui/form";


const GradeFields: FieldConfig[] = [
    {
        type: FieldType.Select,
        name: "studentId",
        label: "Selecciona el estudiante"
    },
    {
        type: FieldType.Select,
        name: "classId",
        label: "Selecciona la clase-asignatura",
    },
    {
        type: FieldType.Select,
        name: "evaluationType",
        label: "Selecciona un tipo de nota",
        options: [
            {label: "Actividad", value: "activity"},
            {label: "Asignación", value: "assignment"},
            {label: "Examen", value: "exam"}
        ]
    },
    {
        type: FieldType.Number,
        name: "score",
        label: "Nota",
    },
    {
        type: FieldType.Date,
        name: "evaluationDate",
        label: "Selecciona una fecha",
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Añade una descripción",
    }
];

export default GradeFields;