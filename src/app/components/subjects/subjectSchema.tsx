import { z } from "zod";


const SubjectSchema = z.object({
    name: z.string(),
    description: z.string(),
    gradeLevel: z.string(),
    status: z.string()
})

export default SubjectSchema