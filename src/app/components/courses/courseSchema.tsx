import { z } from "zod";

const CourseSchema = z.object({
    name: z.string().min(2).max(200),
    description: z.string().min(2).max(200),
    gradeLevel: z.string().min(2).max(200),
    status: z.string().min(2).max(200),
    academicYearId: z.string(),
})

export default CourseSchema