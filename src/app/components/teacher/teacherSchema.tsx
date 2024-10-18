import { z } from "zod";


const StudentSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    statusUser: z.string(),

    expertise: z.string(),
    phone: z.string().min(5),
    address: z.string(),
    hireDate: z.string(),
    status: z.string()
})

export default StudentSchema