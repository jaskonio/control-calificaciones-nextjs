import { z } from "zod";


const AttendanceSchema = z.object({
    studentId: z.string(),
    classId: z.string(),
    scheduleId: z.string(),
    date: z.string(),
    attendanceStatus: z.string(),
    comments: z.string()
})

export default AttendanceSchema