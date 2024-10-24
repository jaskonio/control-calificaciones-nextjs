import { BaseCustomTable, BaseTableFields } from "@/app/components/ui/table";
import { gradeService } from "@/services";

export default async function Page() {
    const data = await gradeService.getAll()
    data.sort((a, b) => (a.evaluationDate > b.evaluationDate) ? 1 : ((b.evaluationDate > a.evaluationDate) ? -1 : 0)).reverse()

    const title = 'Notas'
    const fields: BaseTableFields[] = [
        {
            columnKey: 'id',
            columnName: 'ID',
            isPrimaryKey: true,
            isVisible: false
        },
        {
            columnKey: 'academicYearName',
            columnName: 'Año academico',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'courseName',
            columnName: 'Curso',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'subjectName',
            columnName: 'Asignatura',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'score',
            columnName: 'Nota',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'evaluationDate',
            columnName: 'Fecha',
            isPrimaryKey: false,
            isVisible: true
        },
    ]

    return (
        <BaseCustomTable
            title={title}
            fields={fields}
            data={data}
        />)
}