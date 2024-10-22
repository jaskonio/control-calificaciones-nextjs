import { IBaseService } from '@/models/baseService';
import { PrismaClient } from '@prisma/client';


export abstract class BaseService<T, ViewModel> implements IBaseService<T, ViewModel> {
    protected prisma: PrismaClient;
    protected model: keyof PrismaClient;
    protected convertViewModelToEntity: (data: T, type: string) => any;
    protected convertEntityToViewModel: (data: any) => ViewModel;

    constructor(
        prisma: PrismaClient,
        model: keyof PrismaClient,
        convertViewModelToEntity: (data: T, type: string) => any,
        convertEntityToViewModel: (data: any) => ViewModel,
    ) {
        this.prisma = prisma;
        this.model = model;
        this.convertViewModelToEntity = convertViewModelToEntity;
        this.convertEntityToViewModel = convertEntityToViewModel;
    }

    async create(data: T): Promise<ViewModel> {
        try {
            const transformedData = this.convertViewModelToEntity(data, 'create');

            const createdData = await (this.prisma[this.model] as any).create({
                data: transformedData,
                include: this.getInclude(),
            });

            return this.convertEntityToViewModel(createdData);
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

            return data.map(this.convertEntityToViewModel);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener los registros de ${this.model.toString()}`);
        }
    }

    async getById(id: number): Promise<ViewModel> {
        try {
            const data = await (this.prisma[this.model] as any).findUniqueOrThrow({
                where: { id },
                include: this.getInclude(),
            });

            return this.convertEntityToViewModel(data);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al recuperar el ${this.model.toString()} con ID: ${id}`);
        }
    }

    async update(id: number, data: T): Promise<ViewModel> {
        try {
            const validatedData = this.convertViewModelToEntity(data, 'update');

            const updatedData = await (this.prisma[this.model] as any).update({
                where: { id },
                data: validatedData,
                include: this.getInclude(),
            });

            return this.convertEntityToViewModel(updatedData);
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

            return this.convertEntityToViewModel(deletedData);
        } catch (error) {
            console.error(error);
            throw new Error(`Error al eliminar el ${this.model.toString()} con ID: ${id}`);
        }
    }

    protected abstract getInclude(): any
}
