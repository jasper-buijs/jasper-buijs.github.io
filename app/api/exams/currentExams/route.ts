"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(_req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  //console.log(`user ${session.user?.name} and email ${session.user?.email}`);

  const user = await prisma.user.findUnique({
    where: {
      username: session.user?.name as string,
    }
  });

  if (user == null) return NextResponse.json({ redirect: "/update-logout" }, { status: 400 });

  const exams = await prisma.exam.findMany({
    where: {
      user: user
    }
  });

  return NextResponse.json(
    { user: user, exams: exams },
    { status: 200 }
  );
}