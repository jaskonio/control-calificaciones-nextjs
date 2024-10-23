import { z } from "zod";


const ClassRoomSchema = z.object({
    name: z.string(),
    capacity: z.coerce.number()
})

export default ClassRoomSchema