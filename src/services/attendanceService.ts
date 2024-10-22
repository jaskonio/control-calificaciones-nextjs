import prisma from '../prisma/client';
import { ConverterAttendanceInputToAttendanceModel, ConverterAttendanceModelToViewModel } from '@/prisma/transformer/attendance';
import { BaseService } from './baseService';
import { AttendanceViewModel, CreateAttendanceModel } from '@/models/attendance';


export class AttendanceService extends BaseService<CreateAttendanceModel, AttendanceViewModel> {
    constructor() {
        super(prisma, 'attendance', ConverterAttendanceInputToAttendanceModel, ConverterAttendanceModelToViewModel);
    }

    protected getInclude() {
        return {
            student: {
                include: {
                    user: true,
                }
            },
            class: {
                include: {
                    course: true,
                    subject: true
                }
            },
            schedule: true
        }
    }
}
