"use server";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  const res = await fetch(`https://caliweb.vub.be/?page=course-offer&id=${id}&year=2526&language=nl&output=xml`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const data = await res.text();

  return NextResponse.json(
    { xmlText: data },
    { status: 200 }
  );
}