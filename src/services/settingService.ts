import prisma from '../prisma/client';
import { ConverterSettingInputToSettingModel, ConverterSettingModelToViewModel } from '@/prisma/transformer/setting';
import { BaseService } from './baseService';
import { SettingViewModel, CreateSettingModel } from '@/models/setting';


export class SettingService extends BaseService<CreateSettingModel, SettingViewModel> {
    constructor() {
        super(prisma, 'setting', ConverterSettingInputToSettingModel, ConverterSettingModelToViewModel);
    }

    protected getInclude() {
        return {
        }
    }
}
