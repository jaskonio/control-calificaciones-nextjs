import { BaseCustomTable, BaseTableFields } from "@/app/components/ui/table";
import { auth } from "@/auth";
import { GradeViewModel } from "@/models/grade";
import { gradeService, userService } from "@/services";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default async function Page() {
    const session = await auth();

    if (!session || !session.user) return null

    const user = await userService.getById(Number(session.user.id));
    const data = await gradeService.getAll();
    const dataFiltered = data
        .filter(g => g.studentId === user.student?.id.toString())
        .sort((a, b) => (new Date(b.evaluationDate) - new Date(a.evaluationDate)));

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
            data={dataFiltered}
        />)
}