import { FieldConfig, FieldType } from "../ui/form";


const AttendanceFields: FieldConfig[] = [
    {
        type: FieldType.Select,
        name: "studentId",
        label: "Seleccionar un alumno",
        options: [],
    },
    {
        type: FieldType.Select,
        name: "classId",
        label: "Seleccionar una clase",
        options: [],
    },
    {
        type: FieldType.Select,
        name: "scheduleId",
        label: "Seleccionar el dia de la clase",
        options: [],
    },
    {
        type: FieldType.Date,
        name: "date",
        label: "Seleccionar la fecha",
        placeholder: "Dia de la asistencia"
    },
    {
        type: FieldType.Select,
        name: "attendanceStatus",
        label: "Tipo",
        options: [
            {label: "Presente", value: "present"},
            {label: "Ausente", value: "absent"},
            {label: "Otro Motivo", value: "excused"},
        ],
    },
    {
        type: FieldType.Text,
        name: "comments",
        label: "Comentarios",
        placeholder: "Escribe un comentario"
    },
];

export default AttendanceFields;