import { school_years } from '../data/db';

export class SchoolService {
    private school_years: SchoolYear[] = school_years;
    private schoolYearIdCounter = school_years.length+1;

    async getAll(): Promise<SchoolYear[]> {
        return this.school_years;
    }

    async getById(year_id: number): Promise<SchoolYear | null> {
        return this.school_years.find(year => year.year_id === year_id) || null;
    }

    async add(start_date: string, end_date: string): Promise<SchoolYear> {
        const newSchoolYear: SchoolYear = {
            year_id: this.schoolYearIdCounter++,
            start_date,
            end_date
        };
        this.school_years.push(newSchoolYear);
        return newSchoolYear;
    }

    async update(year_id: number, updatedData: Partial<SchoolYear>): Promise<SchoolYear | null> {
        const schoolYear = await this.getById(year_id);
        if (schoolYear) {
            Object.assign(schoolYear, updatedData);
            return schoolYear;
        }
        return null;
    }

    async delete(year_id: number): Promise<boolean> {
        const index = this.school_years.findIndex(year => year.year_id === year_id);
        if (index !== -1) {
            this.school_years.splice(index, 1);
            return true;
        }
        return false;
    }
}