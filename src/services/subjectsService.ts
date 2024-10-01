import { IRepository } from "@/repositories/interfaces/IRepository";

export class SubjectsService {
    private subjectsRepository: IRepository<Subject>;

    constructor(subjectsRepository: IRepository<Subject>) {
        this.subjectsRepository = subjectsRepository;
    }

    async getAll(): Promise<SubjectView[]> {
        return this.subjectsRepository.getAll();
    }

    async getById(id: number): Promise<SubjectView | null> {
        return this.subjectsRepository.getById(id) || null;
    }

    async add(description: string, name: string): Promise<SubjectView> {
        const newSubject: Subject = {
            subject_id: 0,
            name,
            description,
        };

        return this.subjectsRepository.create(newSubject);
    }

    async update(id: number, updatedData: Partial<SubjectView>): Promise<SubjectView | null> {
        return this.subjectsRepository.update(id, updatedData);
    }

    async delete(id: number): Promise<boolean> {
        return this.subjectsRepository.delete(id);
    }
}