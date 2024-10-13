import { AcademicYear } from '@prisma/client';
import { formatDateToString, parseStringToDate } from '@/lib/utils';
import { AcademicYearViewModel, CreateAcademicYearModel } from '@/models/academicYear';


export function ConverterAcademicYearToViewModel(academicYear: AcademicYear & {
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


export function ConverterInputToPrismaData(input: CreateAcademicYearModel): Partial<AcademicYear> {
    return {
        name: input.name,
        status: input.status,
        startDate: parseStringToDate(input.startDate),
        endDate: parseStringToDate(input.endDate)
    }
}
