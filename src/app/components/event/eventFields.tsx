import { FieldConfig, FieldType } from "../ui/form";


const EventFields: FieldConfig[] = [
    {
        type: FieldType.Select,
        name: "academicYearId",
        label: "Selecciona año academico"
    },
    {
        type: FieldType.Select,
        name: "scheduleId",
        label: "Selecciona un horario"
    },
    {
        type: FieldType.Text,
        name: "title",
        label: "Introduce un titulo"
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Añadir descripción",
    },
    {
        type: FieldType.Date,
        name: "date",
        label: "Añadir fecha",
    },
    {
        type: FieldType.Select,
        name: "eventType",
        label: "Seleccionar tipo de evento",
        options: [
            {label: 'Extracurricular', value:'extracurricular'},
            {label: 'Reunion', value:'meeting'},
            {label: 'Workshop', value:'workshop'},
            {label: 'Otro', value:'other'}
        ]
    }
];

export default EventFields;