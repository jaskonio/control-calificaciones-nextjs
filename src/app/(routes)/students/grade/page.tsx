import { GetUserId } from "@/actions/sessionActions";
import { BaseCustomTable, BaseTableFields } from "@/app/components/ui/table";
import { compareDates, parseStringToDate } from "@/lib/utils";
import { gradeService } from "@/services";


export default async function Page() {
    const userId = await GetUserId()

    const data = await gradeService.getGradeByUserId(userId);
    data.sort((a, b) => compareDates(parseStringToDate(a.evaluationDate), parseStringToDate(b.evaluationDate)));

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
            title='Notas'
            fields={fields}
            data={data}
        />)
}