import { IRepository } from "@/repositories/interfaces/IRepository";

export class CoursesService {
    private coursesRepository: IRepository<Course>;

    constructor(coursesRepository: IRepository<Course>) {
        this.coursesRepository = coursesRepository;
    }

    async getAll(): Promise<CourseView[]> {
        return this.coursesRepository.getAll();
    }

    async getById(id: number): Promise<CourseView | null> {
        return this.coursesRepository.getById(id) || null;
    }

    async add(name: string, parallel: ParallelType): Promise<CourseView> {
        return this.coursesRepository.create({course_id: 0, name, parallel});
    }

    async update(id: number, updatedData: Partial<CourseView>): Promise<CourseView | null> {
        return this.coursesRepository.update(id, updatedData);
    }

    async delete(id: number): Promise<boolean> {
        return this.coursesRepository.delete(id);
    }
}