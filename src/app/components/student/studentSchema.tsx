import { z } from "zod";


const StudentSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    status: z.string(),

    birthDate: z.string(),
    address: z.string(),
    phone: z.string().min(5),
    enrollmentDate: z.string(),
    gradeLevel: z.string()
})

export default StudentSchema