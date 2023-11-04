import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err.message });
  }
}
