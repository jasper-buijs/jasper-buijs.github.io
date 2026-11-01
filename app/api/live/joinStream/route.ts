import { Controller, JoinStreamParams } from "@/app/components/live/lib/controller";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// TODO validate request with Zod [not by me ??]

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const reqBody = await req.json();
    const session = await auth.api.getSession({ headers: await headers() });
    const response = await controller.joinStream({
      ...(reqBody as JoinStreamParams),
      avatar_image: session?.user.image || undefined,
    });
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    if (e instanceof Error) return new NextResponse(e.message, { status: 500 });
    else return new NextResponse(null, { status: 500 });
  }
}