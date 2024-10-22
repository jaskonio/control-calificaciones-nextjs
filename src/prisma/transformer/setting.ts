import { SettingViewModel, CreateSettingModel } from "@/models/setting";
import { Setting } from "@prisma/client";


export function ConverterSettingModelToViewModel(model: Setting): SettingViewModel {
    return {
        id: model.id,
        key: model.key,
        value: model.value,
        description: model.description
    };
}


export function ConverterSettingInputToSettingModel(input: CreateSettingModel, type: string): Partial<any> {
    return {
        key: input.key,
        value: input.value,
        description: input.description
    };
}
