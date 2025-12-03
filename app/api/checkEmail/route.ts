"use server"

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"

export async function GET(_req: NextRequest) {
  const session = await getServerSession(authOptions);
  // console.log(`session found for ${session?.user?.name}`);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: {
      username: session.user?.name as string,
    }
  });

  if (user == null) {
    return NextResponse.json({ redirect: "/update-logout" }, { status: 400 });
  }

  // console.log(`Checking guild member status, currently ${user?.guildMember}`);

  if (user.email == process.env.CREATE_INGRESS_EMAIL) {
    // console.log(`was true so allowing`);
    return NextResponse.json({ status: 200 });
  }  else {
    // console.log(`was false so rerouting home`);
    return NextResponse.json({error: "Unauthorized"}, { status: 401 });
  }
}