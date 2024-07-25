import prisma from "@/lib/db";

export async function GET(req: Request, res: Response) {
    console.log("GET")
    const teachers = await prisma.teacher.findMany({orderBy:[{id: 'asc'}]});
    return Response.json(teachers)
}

export async function POST(req: Request) {
    console.log("Teacher POST")
    const { username, password, firstName, lastName, birthDate}  = await req.json()

    const isobirthDate = new Date(birthDate).toISOString();
    const result = await prisma.teacher.create({
        data : {
            username: username, 
            password: password,
            firstName: firstName, 
            lastName: lastName, 
            birthDate: isobirthDate
        }
    })

    return Response.json(result)
}