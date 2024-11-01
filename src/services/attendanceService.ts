import prisma from '../prisma/client';
import { ConverterAttendanceInputToAttendanceModel, ConverterAttendanceModelToViewModel } from '@/prisma/transformer/attendance';
import { BaseService } from './baseService';
import { AttendanceViewModel, CreateAttendanceModel } from '@/models/attendance';


export class AttendanceService extends BaseService<CreateAttendanceModel, AttendanceViewModel> {
    constructor() {
        super(prisma, 'attendance', ConverterAttendanceInputToAttendanceModel, ConverterAttendanceModelToViewModel);
    }

    async getAttendanceByStudentId(studenId: number) {
        try {
            const results = await this.prisma.attendance.findMany({
                where: {
                    studentId: studenId
                },
                include: this.getInclude(),
            });

            return results.map(ConverterAttendanceModelToViewModel);
        } catch (error) {
            console.error(error);
            throw new Error(`Error getting ${this.model.toString()}`);
        }
    }

    protected getInclude() {
        return {
            student: {
                include: {
                    user: true,
                }
            },
            event: true,
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
