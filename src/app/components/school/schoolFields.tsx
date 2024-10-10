
const SchoolFields = [
    {
        type: "text",
        name: "name",
        label: "Nombre del año escolar",
        placeholder: "Ingresa un nombre",
    },
    {
        type: "date",
        name: "startDate",
        label: "Fecha Inicio",
        placeholder: "Ingresa tu edad",
    },
    {
        type: "date",
        name: "endDate",
        label: "Fecha fin",
        placeholder: "Ingresa tu edad",
    },
    {
        type: "select",
        name: "status",
        label: "Estado",
        options: [
            { label: "Activo", value: "active" },
            { label: "incativo", value: "inactive" },
        ],
    },
];

export default SchoolFields;