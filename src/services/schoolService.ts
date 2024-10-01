import { IRepository } from "@/repositories/interfaces/IRepository";

export class SchoolService {
    private schoolRepository: IRepository<SchoolYear>;

    constructor(schoolRepository: IRepository<SchoolYear>) {
        this.schoolRepository = schoolRepository;
    }

    async getAll(): Promise<SchoolYear[]> {
        return this.schoolRepository.getAll();
    }

    async getById(id: number): Promise<SchoolYear | null> {
        return this.schoolRepository.getById(id) || null;
    }

    async add(start_date: string, end_date: string): Promise<SchoolYear> {
        const newSchoolYear: SchoolYear = {
            year_id: 0,
            start_date,
            end_date
        };

        return this.schoolRepository.create(newSchoolYear);
    }

    async update(id: number, updatedData: Partial<SchoolYear>): Promise<SchoolYear | null> {
        return this.schoolRepository.update(id, updatedData);
    }

    async delete(id: number): Promise<boolean> {
        return this.schoolRepository.delete(id);
    }
}