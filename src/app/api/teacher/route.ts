import prisma from "@/lib/db";

export async function GET(req: Request, res: Response) {
    console.log("GET")
    const teachers = await prisma.teacher.findMany();
    return Response.json(teachers)
}

export async function POST(req: Request,) {
    console.log("POST")
    const messages = await req.json()
    console.log("messages", messages)
    return Response.json(messages)
}