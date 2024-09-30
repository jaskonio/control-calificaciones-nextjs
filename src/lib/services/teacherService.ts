import { teachers } from '../data/db';
import { UserService } from './userService';

export class TeacherService {
    private data: Teacher[] = teachers;
    private idCounter = this.data.length+1;
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
    
    async getAll(): Promise<TeacherView[]> {
        const teachers = this.data;
        const teacherViews: TeacherView[] = [];

        for (const teacher of teachers) {
            const user = await this.userService.getById(teacher.user_id);
            if (user) {
                teacherViews.push({ ...teacher, user });
            }
        }
        return teacherViews;
    }

    async getById(teacher_id: number): Promise<TeacherView | null> {
        const teacher = this.data.find(t => t.teacher_id === teacher_id);
        if (teacher) {
            const user = await this.userService.getById(teacher.user_id);
            if (user) {
                return { ...teacher, user };
            }
        }

        return null
    }

    async add(role: UserRole, name: string, email: string, password: string, first_name: string, last_name: string): Promise<TeacherView> {
        const user = await this.userService.add(role, name, email, password);

        const newTeacher: Teacher = {
            teacher_id: this.idCounter++,
            first_name: first_name,
            last_name: last_name,
            user_id: user.user_id
        };
    
        this.data.push(newTeacher);

        if (!user) {
            throw new Error(`User with ID ${newTeacher.user_id} not found.`);
        }

        return {...newTeacher, user};
    }

    async update(id: number, updatedData: TeacherView): Promise<TeacherView | null> {
        const user = await this.userService.update(updatedData.user_id, updatedData.user)

        if (!user) {
            return null;
        }

        updatedData.user = user

        const teacher = this.data.find(t => t.teacher_id === id);

        if (!teacher) {
            return null;
        }

        Object.assign(teacher, updatedData);
       
        const teacherUpdate = this.getById(id)
        return teacherUpdate;
    }

    async delete(id: number): Promise<boolean> {
        const teacher = await this.getById(id)

        if (!teacher) {
            return false;
        }

        const userResult = await this.userService.delete(teacher.user_id)
    
        const index = this.data.findIndex(e => e.teacher_id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }

        return false;
    }
}