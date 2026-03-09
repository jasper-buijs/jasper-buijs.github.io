
// TODO validate request with Zod [not from me??]

import { Controller, getSessionFromReq, RemoveFromStageParams } from "@/app/components/live/lib/controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const session = getSessionFromReq(req);
    const reqBody = await req.json();
    await controller.removeFromStage(session, reqBody as RemoveFromStageParams);
    return new NextResponse(null, { status: 200 });
  } catch (e) {
    if (e instanceof Error) return new NextResponse(e.message, { status: 500 });
    else return new NextResponse(null, { status: 500 });
  }
}