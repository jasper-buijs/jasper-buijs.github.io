"use server";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(_req: NextRequest) {
  const session = await getServerSession(authOptions);
  if(!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: {
      username: session.user?.name as string,
    }
  });

  if (user == null) return NextResponse.json({ redirect: "/update-logout" }, { status: 400 });

  const paymentInfo = await prisma.portugalPayments.findFirst({
    where: {
      user: user
    }
  });

  return NextResponse.json(
    { user: user, paymentInfo: paymentInfo },
    { status: 200 }
  );
}