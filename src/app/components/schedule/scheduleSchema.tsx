import { isTimeGreater } from "@/lib/utils";
import { z } from "zod";


const ScheduleSchema = z.object({
    classroomId: z.string(),
    classId: z.string().optional(),
    eventId: z.string().optional(),
    dayOfWeek: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    description: z.string()
}).required().refine((data) => { return isTimeGreater(data.endTime, data.startTime) }, { message: "La Hora Final debe ser mayor a la hora de inicio", path: ['endTime'] })

export default ScheduleSchema