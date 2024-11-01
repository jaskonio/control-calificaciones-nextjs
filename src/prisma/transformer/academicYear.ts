import { AcademicYear } from '@prisma/client';
import { formatDateToString, parseStringToDate } from '@/lib/utils';
import { AcademicYearViewModel, CreateAcademicYearModel } from '@/models/academicYear';

export type EntityAcedemicYear = AcademicYear & {
    courses?: any[];
    events?: any[];
}

export function ConverterAcademicYearToViewModel(academicYear: EntityAcedemicYear): AcademicYearViewModel {
    return {
        id: academicYear.id,
        name: academicYear.name,
        status: academicYear.status,
        startDate: formatDateToString(academicYear.startDate),
        endDate: formatDateToString(academicYear.endDate),
        courses: academicYear.courses ?? [],
        events: academicYear.events ?? []
    };
}


export function ConverterInputToPrismaData(input: CreateAcademicYearModel, type: string): Partial<AcademicYear> {
    return {
        name: input.name,
        startDate: parseStringToDate(input.startDate),
        endDate: parseStringToDate(input.endDate),
        status: input.status
    }
}
