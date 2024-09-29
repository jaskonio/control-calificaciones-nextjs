import { SchoolYearService } from './services/schoolYearService'

const schoolYearService = new SchoolYearService()

export async function getAllSchoolYear(): Promise<SchoolYear[]> {
    await new Promise(resolve => setTimeout(resolve, 1500))

    const result = await schoolYearService.getAll()
    return result
}

export async function getSchoolYearById(id: number): Promise<SchoolYear | null> {
    const result = await schoolYearService.getById(id)
    return result
}

export async function addSchoolYear(start_date: string, end_date: string): Promise<SchoolYear> {
    const result = await schoolYearService.add(start_date, end_date)
    return result
}

export async function deleteSchoolYearById(id: number): Promise<boolean> {
    const result = await schoolYearService.delete(id)
    return result
}