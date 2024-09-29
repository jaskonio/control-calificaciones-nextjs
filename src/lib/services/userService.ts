import { users } from '../data/db';

export class UserService {
    private data: User[] = users;
    private idCounter = this.data.length+1;

    async getAll(): Promise<User[]> {
        return this.data;
    }

    async getById(id: number): Promise<User | null> {
        return this.data.find(e => e.user_id === id) || null;
    }

    async add(role: UserRole, name: string, email: string, password: string): Promise<User> {
        const newUser: User = {
            user_id: this.idCounter++,
            role,
            name,
            email,
            password
        };
        this.data.push(newUser);
        return newUser;
    }

    async update(id: number, updatedData: Partial<User>): Promise<User | null> {
        const User = await this.getById(id);
        if (User) {
            Object.assign(User, updatedData);
            return User;
        }

        return null;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.data.findIndex(e => e.user_id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }

        return false;
    }
}