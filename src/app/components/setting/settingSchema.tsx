import { z } from "zod";


const SettingSchema = z.object({
    key: z.string(),
    value: z.string(),
    description: z.string()
})

export default SettingSchema