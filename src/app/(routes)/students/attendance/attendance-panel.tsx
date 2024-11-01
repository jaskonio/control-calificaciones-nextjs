"use client"

import { SelectOption } from "@/app/components/ui/form";
import { SelectOptions } from "@/app/components/ui/select";
import { BaseCustomTable, BaseTableFields } from "@/app/components/ui/table";
import { AttendanceViewModel } from "@/models/attendance";
import { useMemo, useState } from "react";


interface AttendancePanelProps {
    studentId: number;
    academicYears: SelectOption[]
    attendanceData: AttendanceViewModel[];
}

export default function AttendancePanel({ academicYears, attendanceData }: AttendancePanelProps) {
    const [selectedYear, setSelectedYear] = useState(academicYears[academicYears.length - 1].value);

    const attendanceFiltered = useMemo(() => {
        return attendanceData.filter(e => e.academicYearId == Number(selectedYear)) || [];
    }, [selectedYear, attendanceData])

    const fields: BaseTableFields[] = [
        {
            columnKey: 'id',
            columnName: 'ID',
            isPrimaryKey: true,
            isVisible: false
        },
        {
            columnKey: 'date',
            columnName: 'Fecha',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'class.course.name',
            columnName: 'Curso',
            isPrimaryKey: false,
            isVisible: true
        },
        {
            columnKey: 'class.subject.name',
            columnName: 'Asignatura',
            isPrimaryKey: false,
            isVisible: true
        },
    ]

    return (
        <div>
            <SelectOptions
                placeholder="Selecciona un aña academico"
                options={academicYears}
                defaultValue={academicYears[0].value}
                onSelect={setSelectedYear}></SelectOptions>
            <BaseCustomTable
                title='Asistencia'
                fields={fields}
                data={attendanceFiltered}
            />
        </div>
    );
}