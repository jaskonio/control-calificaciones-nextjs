import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

// GET /api/teacher/:id
export async function GET(req: NextApiRequest, { params }: {params: {id: string}}) {
    console.log("TEACHER GET BY ID")
    const id = params.id;
    console.log(params.id)
    const teacher = await prisma.teacher.findUnique({where:{ id: Number(id)}});

    if (teacher == null) {
        return Response.json({});
    }

    return Response.json(teacher)
}

export async function PUT(req: Request, { params }: {params: {id: string}}) {
    console.log("TEACHER PUT BY ID")
    const id = params.id;

    const { username, password, firstName, lastName, birthDate}  = await req.json()

    const isoBirthDate = new Date(birthDate).toISOString();
    const teacher = await prisma.teacher.update(
        {
            where: { id: Number(id) },
            data: { username, password, firstName, lastName, birthDate: isoBirthDate} 
        }
    );

    if (teacher == null) {
        return Response.json({});
    }

    return Response.json(teacher)
}

export async function DELETE(req: NextApiRequest, { params }: {params: {id: string}}) {
    console.log("TEACHER DELETE BY ID")
    const id = params.id;
    console.log(id)

    const teacher = await prisma.teacher.delete({where:{ id: Number(id)}});

    if (teacher == null) {
        return Response.json({});
    }

    return Response.json(teacher)
}