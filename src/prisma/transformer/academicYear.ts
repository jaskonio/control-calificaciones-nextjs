import { AcademicYear, AcademicYearStatus } from '@prisma/client';
import { formatDateToString, parseStringToDate } from '@/lib/utils';
import { AcademicYearViewModel } from '@/models/academicYear';


export function transformAcademicYearToViewModel(academicYear: AcademicYear & {
    courses: any[];
    students: any[];
    events: any[];
}): AcademicYearViewModel {
    return {
        id: academicYear.id,
        name: academicYear.name,
        status: academicYear.status,
        startDate: formatDateToString(academicYear.startDate),
        endDate: formatDateToString(academicYear.endDate),
        courses: academicYear.courses,
        students: academicYear.students,
        events: academicYear.events,
    };
}


export function transformInputToPrismaData(input: {
    name: string;
    status: AcademicYearStatus;
    startDate: string;
    endDate: string;
}) {
    const name = input.name;
    const status = input.status;
    const startDate = parseStringToDate(input.startDate);
    const endDate = parseStringToDate(input.endDate);

    return { name, status, startDate, endDate };
}
