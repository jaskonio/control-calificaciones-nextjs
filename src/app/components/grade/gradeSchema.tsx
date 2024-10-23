import { z } from "zod";


const GradeSchema = z.object({
    studentId: z.string(),
    classId: z.string(),
    evaluationType: z.string(),
    score: z.coerce.number(),
    evaluationDate: z.string(),
    description: z.string()
})

export default GradeSchema