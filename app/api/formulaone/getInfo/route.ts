"use server";

import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const raceId = req.nextUrl.searchParams.get("id");

  if (raceId == null) return NextResponse.json({ error: "Missing arguments" }, { status: 400 });

  const pageInfo = await prisma.f1PagesData.findFirst({
    where: {
      page: raceId
    }
  });

  if (!pageInfo) return NextResponse.json({ error: "Could not find page" }, { status: 400 });
  else return NextResponse.json({ title: pageInfo.title, link: pageInfo.link }, { status: 200 });
}