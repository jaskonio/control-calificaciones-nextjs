import { IRepository } from "@/repositories/interfaces/IRepository";

export class StudentsService {
    private userRepository: IRepository<User>;
    private studentRepository: IRepository<Student>;

    constructor(userRepository: IRepository<User>, studentRepository: IRepository<Student>) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
    }
    
    async getAll(): Promise<StudentView[]> {
        const entities = await this.studentRepository.getAll();
        const restuls: StudentView[] = [];

        for (const entity of entities) {
            const user = await this.userRepository.getById(entity.user_id);
            if (user) {
                restuls.push({ ...entity, user });
            }
        }

        return restuls;
    }

    async getById(id: number): Promise<StudentView | null> {
        const entity = await this.studentRepository.getById(id);

        if (entity) {
            const user = await this.userRepository.getById(entity.user_id);
            if (user) {
                return { ...entity, user };
            }
        }

        return null
    }

    async add(role: UserRole, name: string, email: string, password: string, first_name: string, last_name: string, birth_date: string): Promise<StudentView> {
        const newUser = await this.userRepository.create({role, name, email, password, user_id:0});

        const newStudent: Student = {
            student_id: 0,
            first_name: first_name,
            last_name: last_name,
            birth_data: birth_date,
            user_id: newUser.user_id
        };
    
        const studentInserted = await this.studentRepository.create(newStudent);

        return {...studentInserted, user: newUser};
    }

    async update(id: number, updatedData: StudentView): Promise<StudentView | null> {
        const userUpdated = await this.userRepository.update(updatedData.user_id, updatedData.user)

        if (!userUpdated) {
            return null;
        }

        updatedData.user = userUpdated

        const studentEntity = await this.studentRepository.update(id, updatedData);

        if (!studentEntity) {
            return null;
        }

        return {...studentEntity, user: userUpdated};
    }

    async delete(id: number): Promise<boolean> {
        const student = await this.getById(id)

        if (!student) {
            return false;
        }

        const userResult = await this.userRepository.delete(student.user_id)
    
        const index = await this.studentRepository.delete(id);

        if (!index) {
            return false;
        }

        return false;
    }
}