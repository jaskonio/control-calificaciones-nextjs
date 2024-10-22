import { FieldConfig, FieldType } from "../ui/form";


const ClassFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "classroom",
        label: "Nombre de la clase",
        placeholder: "Ingresa un nombre",
    },
    {
        type: FieldType.Select,
        name: "courseId",
        label: "Asignar a un curso",
        options: [],
    },
    {
        type: FieldType.Select,
        name: "subjectId",
        label: "Asignar una materia",
        options: [],
    },
    {
        type: FieldType.Select,
        name: "teacherId",
        label: "Asignar un Profesor",
        options: [],
    }
];

export default ClassFields;