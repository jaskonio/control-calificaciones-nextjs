import { IRepository } from '../interfaces/IRepository';


export class FileRepository<T> implements IRepository<T> {
    private data: T[];
    private idField: keyof T;
    private idCounter: number;

    constructor(data: T[], idField: keyof T) {
        this.data = data
        this.idField = idField;
        this.idCounter = this.data.length + 1;
    }

    async getAll(): Promise<T[]> {
        return this.data;
    }

    async getById(id: number): Promise<T | null> {
        const item = this.data.find(item => item[this.idField] === id);
        return item || null;
    }

    async create(item: T): Promise<T> {
        item[this.idField] = this.idCounter++ as any;
        this.data.push(item);
        return item;
    }

    async update(id: number, item: Partial<T>): Promise<T | null> {
        const beforeItem = await this.getById(id);

        if (beforeItem) {
            Object.assign(beforeItem, item);
            return beforeItem;
        }

        return null;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.data.findIndex(item => item[this.idField] === id);

        if (index !== -1) {
            this.data.splice(index, 1);
            return true;
        }

        return false;
    }
}
