import { students } from '../data/db';
import { UserService } from './userService';

export class StudentsService {
    private data: Student[] = students;
    private idCounter = this.data.length+1;
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
    
    async getAll(): Promise<StudentView[]> {
        const entities = this.data;
        const restuls: StudentView[] = [];

        for (const entity of entities) {
            const user = await this.userService.getById(entity.user_id);
            if (user) {
                restuls.push({ ...entity, user });
            }
        }

        return restuls;
    }

    async getById(id: number): Promise<StudentView | null> {
        const entity = this.data.find(t => t.student_id === id);
        if (entity) {
            const user = await this.userService.getById(entity.user_id);
            if (user) {
                return { ...entity, user };
            }
        }

        return null
    }

    async add(role: UserRole, name: string, email: string, password: string, first_name: string, last_name: string, birth_date: string): Promise<StudentView> {
        const newUser = await this.userService.add(role, name, email, password);

        const newStudent: Student = {
            student_id: this.idCounter++,
            first_name: first_name,
            last_name: last_name,
            birth_data: birth_date,
            user_id: newUser.user_id
        };
    
        this.data.push(newStudent);

        return {...newStudent, user: newUser};
    }

    async update(id: number, updatedData: StudentView): Promise<StudentView | null> {
        const userUpdated = await this.userService.update(updatedData.user_id, updatedData.user)

        if (!userUpdated) {
            return null;
        }

        updatedData.user = userUpdated

        const userEntity = this.data.find(t => t.student_id === id);

        if (!userEntity) {
            return null;
        }

        Object.assign(userEntity, updatedData);
       
        const studentUpdated = this.getById(id)
        return studentUpdated;
    }

    async delete(id: number): Promise<boolean> {
        const student = await this.getById(id)

        if (!student) {
            return false;
        }

        const userResult = await this.userService.delete(student.user_id)
    
        const index = this.data.findIndex(e => e.student_id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }

        return false;
    }
}