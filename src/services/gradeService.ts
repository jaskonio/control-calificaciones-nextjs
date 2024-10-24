import prisma from '../prisma/client';
import { ConverterGradeInputToGradeModel, ConverterGradeModelToViewModel } from '@/prisma/transformer/grade';
import { BaseService } from './baseService';
import { GradeViewModel, CreateGradeModel } from '@/models/grade';


export class GradeService extends BaseService<CreateGradeModel, GradeViewModel> {
    constructor() {
        super(prisma, 'grade', ConverterGradeInputToGradeModel, ConverterGradeModelToViewModel);
    }

    async getGradeByUserId(userId: number) {
        const grades = await this.getAll();
        const gradeFiltered = grades.filter(s => s.student.userId == userId)

        return gradeFiltered
    }

    protected getInclude() {
        return {
            student: {
                include: {
                    user: true
                }
            },
            class: {
                include: {
                    course: {
                        include: {
                            academicYear: true,
                        }
                    },
                    subject: true
                }
            }
        }
    }
}
