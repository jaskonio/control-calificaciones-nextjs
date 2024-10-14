import { z } from "zod";


const SchoolSchema = z.object({
    name: z.string().min(5, { message: "El nombre debe contener minimo de 5 letras" }),
    description: z.string(),
    gradeLevel: z.string(),
    status: z.string(),
    academicYear: z.string()
})

export default SchoolSchema