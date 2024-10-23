import { z } from "zod";


const EventSchema = z.object({
    academicYearId: z.string(),
    scheduleId: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    eventType: z.string()
})

export default EventSchema