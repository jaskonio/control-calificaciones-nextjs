import { Setting } from "@prisma/client";


export type CreateSettingModel = Omit<Setting, 'id'> & {
}

export type SettingViewModel = CreateSettingModel & {
    id: number;
}