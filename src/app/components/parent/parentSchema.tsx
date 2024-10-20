import { z } from "zod";


const ParentSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    status: z.string(),

    address: z.string(),
    phone: z.string().min(5)
})

export default ParentSchema