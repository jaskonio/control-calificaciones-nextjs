import { z } from "zod";


const ScheduleSchema = z.object({
    classroomId: z.string(),
    classId: z.string().optional(),
    eventId: z.string().optional(),
    dayOfWeek: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    description: z.string()
})

export default ScheduleSchema