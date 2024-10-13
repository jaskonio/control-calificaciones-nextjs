import { IBaseService } from '@/models/baseService';
import { PrismaClient, Prisma } from '@prisma/client';


export abstract class BaseService<T, ViewModel> implements IBaseService<T, ViewModel> {
    protected prisma: PrismaClient;
    protected model: keyof PrismaClient;
    protected transformToModel: (data: T) => any;
    protected transformToViewModel: (data: any) => ViewModel;

    constructor(
        prisma: PrismaClient,
        model: keyof PrismaClient,
        transformToModel: (data: T) => any,
        transformToViewModel: (data: any) => ViewModel
    ) {
        this.prisma = prisma;
        this.model = model;
        this.transformToModel = transformToModel;
        this.transformToViewModel = transformToViewModel;
    }

    async create(data: T): Promise<ViewModel> {
        try {
            const transformedData = this.transformToModel(data);

            const createdData = await (this.prisma[this.model] as any).create({
                data: transformedData,
                include: this.getInclude(),
            });

            return this.transformToViewModel(createdData);
        } catch (error) {
            console.error(error);
            throw new Error(`Error creando el ${this.model.toString()}`);
        }
    }

    async getAll(): Promise<ViewModel[]> {
        try {
            const data = await (this.prisma[this.model] as any).findMany({
                include: this.getInclude(),
                orderBy: { id: 'asc' },
            });

            return data.map(this.transformToViewModel);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener los registros de ${this.model.toString()}`);
        }
    }

    async getById(id: number): Promise<ViewModel | null> {
        try {
            const data = await (this.prisma[this.model] as any).findUnique({
                where: { id },
                include: this.getInclude(),
            });

            if (!data) return null;

            return this.transformToViewModel(data);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al recuperar el ${this.model.toString()} con ID: ${id}`);
        }
    }

    async update(id: number, data: T): Promise<ViewModel> {
        try {
            const validatedData = this.transformToModel(data);

            const updatedData = await (this.prisma[this.model] as any).update({
                where: { id },
                data: validatedData,
                include: this.getInclude(),
            });

            return this.transformToViewModel(updatedData);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al actualizar el ${this.model.toString()} con ID: ${id}`);
        }
    }

    async delete(id: number): Promise<ViewModel> {
        try {
            const deletedData = await (this.prisma[this.model] as any).delete({
                where: { id },
                include: this.getInclude(),
            });

            return this.transformToViewModel(deletedData);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el ${this.model.toString()} con ID: ${id}`);
        }
    }

    protected abstract getInclude(): any
}
