import { Controller, getSessionFromReq, InviteToStageParams } from "@/app/components/live/lib/controller";
import { NextRequest, NextResponse } from "next/server";

// TODO: validate request with Zod [not be me??]

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const session = getSessionFromReq(req);
    const reqBody = await req.json();
    await controller.inviteToStage(session, reqBody as InviteToStageParams);
    return new NextResponse(null, { status: 200 });
  } catch (e) {
    if (e instanceof Error) return new NextResponse(e.message, { status: 500 });
    else return new NextResponse(null, { status: 500 });
  }
}