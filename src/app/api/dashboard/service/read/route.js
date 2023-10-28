import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try{
        const prisma = new PrismaClient();
        const result = await prisma.service.findMany({})
        return NextResponse.json(
            {status: "success", data: result},
        )
    }catch(err){
        return NextResponse.json(
            {status: "error", data: err.message},
        )
    }
}