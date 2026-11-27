import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(
  req: NextRequest
) {
  const data: { id: number, user_id: string } = await req.json();
  await prisma.exam.delete({
    where: {
      id: data.id,
      userId: data.user_id,
    }
  });
  return NextResponse.json({ status: 200 });
}