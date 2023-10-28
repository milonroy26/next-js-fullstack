import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        const body = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.service.createMany({
            data: body
        })
        return NextResponse.json(
            {status: "success", data: result},
        )
    }catch(err){
        return NextResponse.json(
            {status: "error", data: err.message},
        )
    }
}