import { IRepository } from '@/repositories/interfaces/IRepository';

export class TeacherService {
    private userRepository: IRepository<User>;
    private teacherRepository: IRepository<Teacher>;

    constructor(userRepository: IRepository<User>, teacherRepository: IRepository<Teacher>) {
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
    }
    
    async getAll(): Promise<TeacherView[]> {
        const teachers = await this.teacherRepository.getAll();
        const teacherViews: TeacherView[] = [];

        for (const teacher of teachers) {
            const user = await this.userRepository.getById(teacher.user_id);
            if (user) {
                teacherViews.push({ ...teacher, user });
            }
        }
        return teacherViews;
    }

    async getById(id: number): Promise<TeacherView | null> {
        const teacher = await this.teacherRepository.getById(id);

        if (teacher) {
            const user = await this.userRepository.getById(teacher.user_id);
            if (user) {
                return { ...teacher, user };
            }
        }

        return null
    }

    async add(role: UserRole, name: string, email: string, password: string, first_name: string, last_name: string): Promise<TeacherView> {
        const newUser = await this.userRepository.create({role, name, email, password, user_id: 0});

        const newTeacher: Teacher = {
            teacher_id: 0,
            first_name: first_name,
            last_name: last_name,
            user_id: newUser.user_id
        };
    
        const teacherInserted = await this.teacherRepository.create(newTeacher);

        return {...teacherInserted, user: newUser};
    }

    async update(id: number, updatedData: TeacherView): Promise<TeacherView | null> {
        const userUpdated = await this.userRepository.update(updatedData.user_id, updatedData.user)

        if (!userUpdated) {
            return null;
        }

        updatedData.user = userUpdated

        const teacherEntity = await this.teacherRepository.update(id, updatedData);

        if (!teacherEntity) {
            return null;
        }

        return {...teacherEntity, user: userUpdated};
    }

    async delete(id: number): Promise<boolean> {
        const teacher = await this.getById(id)

        if (!teacher) {
            return false;
        }

        const userResult = await this.userRepository.delete(teacher.user_id)
    
        const index = await this.teacherRepository.delete(id);

        if (!index) {
            return false;
        }

        return false;
    }
}