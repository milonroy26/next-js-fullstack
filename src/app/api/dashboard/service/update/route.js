import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const prisma = new PrismaClient();
    const result = await prisma.service.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: "Weekly Sales",
        imgCDN: "http://localhost:3000/images/advertisement.png",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", data: err.message });
  }
}
