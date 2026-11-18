"use server";

import { auth } from "@/auth";
import { headers } from "next/headers";

// import { getServerSession } from "next-auth"; // next-auth -> better-auth
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(_req: NextRequest) {
  // const session = await getServerSession(authOptions);
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if(!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = session.user;
  /*const user = await prisma.user.findUnique({
    where: {
      name: session.user?.name as string,
    }
  });*/


  // if (user == null) return NextResponse.json({ redirect: "/update-logout" }, { status: 400 });

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