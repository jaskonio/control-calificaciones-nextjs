import { z } from "zod";


const ClassSchema = z.object({
    courseId: z.string(),
    subjectId: z.string(),
    teacherId: z.string(),
    classroom: z.string()
})

export default ClassSchema