import { BaseCustomTable, BaseTableFields } from "@/app/components/ui/table";
import { auth } from "@/auth";
import { gradeService } from "@/services";

export default async function Page() {
    const session = await auth();

    if (!session || !session.user) return null

    const data = await gradeService.getGradeByUserId(Number(session.user.id));
    data.sort((a, b) => (new Date(b.evaluationDate) - new Date(a.evaluationDate)));

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