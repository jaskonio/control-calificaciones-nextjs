import prisma from "@/lib/db";

export async function GET(req: Request, res: Response) {
    console.log("GET")
    const teachers = await prisma.teacher.findMany();
    return Response.json(teachers)
}
