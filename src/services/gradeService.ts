import prisma from '../prisma/client';
import { ConverterGradeInputToGradeModel, ConverterGradeModelToViewModel } from '@/prisma/transformer/grade';
import { BaseService } from './baseService';
import { GradeViewModel, CreateGradeModel } from '@/models/grade';


export class GradeService extends BaseService<CreateGradeModel, GradeViewModel> {
    constructor() {
        super(prisma, 'grade', ConverterGradeInputToGradeModel, ConverterGradeModelToViewModel);
    }

    protected getInclude() {
        return {
            student: true,
            class: true
        }
    }
}
