import { z } from "zod";

const SchoolSchema = z.object({
    name: z.string().min(5, { message: "El nombre debe contener minimo de 5 letras" }),
    startDate: z.string(),
    endDate: z.string(),
    status: z.string(),
})

export default SchoolSchema