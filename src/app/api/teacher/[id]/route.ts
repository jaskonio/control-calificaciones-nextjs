import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

// GET /api/teacher/:id
export async function GET(req: NextApiRequest, { params }: {params: {id: string}}) {
    console.log("GET BY ID")
    const id = params.id;
    console.log(params.id)
    const teacher = await prisma.teacher.findUnique({where:{ id: Number(id)}});
    return Response.json(teacher)
}
