import { school_years, users, teachers, students, subjects, courses} from '@/db/db';
import { FileRepository } from './file/fileRepository';
import { IRepository } from './interfaces/IRepository';

type StorageType = 'FILE' | 'POSTGRESQL' | 'API';

class RepositoryFactory {
    private static storageType: StorageType = (process.env.STORAGE_TYPE || 'FILE') as StorageType;

    static getSchoolRepository(): IRepository<SchoolYear> {
        switch (this.storageType) {
            case 'FILE':
                return new FileRepository<SchoolYear>(school_years, 'year_id');
            default:
                throw new Error(`Unsupported storage type: ${this.storageType}`);
        }
    }

    static getUserRepository(): IRepository<User> {
        switch (this.storageType) {
            case 'FILE':
                return new FileRepository<User>(users, 'user_id');
            default:
                throw new Error(`Unsupported storage type: ${this.storageType}`);
        }
    }

    static getTeacherRepository(): IRepository<Teacher> {
        switch (this.storageType) {
            case 'FILE':
                return new FileRepository<Teacher>(teachers, 'teacher_id');
            default:
                throw new Error(`Unsupported storage type: ${this.storageType}`);
        }
    }

    static getStudentRepository(): IRepository<Student> {
        switch (this.storageType) {
            case 'FILE':
                return new FileRepository<Student>(students, 'student_id');
            default:
                throw new Error(`Unsupported storage type: ${this.storageType}`);
        }
    }

    static getSubjectsRepository(): IRepository<Subject> {
        switch (this.storageType) {
            case 'FILE':
                return new FileRepository<Subject>(subjects, 'subject_id');
            default:
                throw new Error(`Unsupported storage type: ${this.storageType}`);
        }
    }
}

export default RepositoryFactory;
