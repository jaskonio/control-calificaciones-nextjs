import { FieldConfig, FieldType } from "../ui/form";


const SettingFields: FieldConfig[] = [
    {
        type: FieldType.Text,
        name: "key",
        label: "Introduce un clave"
    },
    {
        type: FieldType.Text,
        name: "value",
        label: "Introduce un valor"
    },
    {
        type: FieldType.Text,
        name: "description",
        label: "Introduce una descripción"
    },
];

export default SettingFields;