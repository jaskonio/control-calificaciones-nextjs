import { generateTimeRange } from "@/lib/utils";
import { FieldConfig, FieldType } from "../ui/form";


const ScheduleFields: FieldConfig[] = [
    {
        type: FieldType.Select,
        name: "classroomId",
        label: "Selecciona una aula",
    },
    {
        type: FieldType.Select,
        name: "classId",
        label: "Selecciona una clase",
    },
    {
        type: FieldType.Select,
        name: "eventId",
        label: "Selecciona un evento",
    },
    {
        type: FieldType.Select,
        name: "dayOfWeek",
        label: "Selecciona un dia",
        options: [
            { label: "Lunes", value: "monday" },
            { label: "Martes", value: "tuesday" },
            { label: "Miercoles", value: "wednesday" },
            { label: "Jueves", value: "thursday" },
            { label: "Viernes", value: "friday" },
            { label: "Sabado", value: "saturday" },
            { label: "Domingo", value: "sunday" }
        ]
    },
    {
        type: FieldType.Select,
        name: "startTime",
        label: "Hora inicio",
        options: generateTimeRange('07:00', '20:00').map((element) => {
            return {
                label: element.toString(),
                value: element.toString()
            }
        })
    },
    {
        type: FieldType.Select,
        name: "endTime",
        label: "Hora final",
        options: generateTimeRange('07:00', '20:00').map((element) => {
            return {
                label: element.toString(),
                value: element.toString()
            }
        })
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Añade una descripción",
    },
];

export default ScheduleFields;