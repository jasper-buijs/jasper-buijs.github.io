"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest) {
  const id = parseInt(req.nextUrl.searchParams.get("id") || "0");

  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  });

  if (user == null) return NextResponse.json({ error: "user not found" }, { status: 400 });

  return NextResponse.json({ imageSrc: user.image }, { status: 200 });
}