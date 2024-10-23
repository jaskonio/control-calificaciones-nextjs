import { FieldConfig, FieldType } from "../ui/form";


const ClassRoomFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "name",
        label: "Introduce un nombre"
    },
    {
        type: FieldType.Number,
        name: "capacity",
        label: "Asignar el numero maximo de asistentes",
    }
];

export default ClassRoomFields;