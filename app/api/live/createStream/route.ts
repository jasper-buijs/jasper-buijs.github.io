import { Controller, CreateStreamParams } from "@/app/components/live/lib/controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const reqBody = await req.json();
    const response = await controller.createStream(
      reqBody as CreateStreamParams
    );
    return NextResponse.json(response);
  } catch (e) {
    if (e instanceof Error) return NextResponse.json(e.message, { status: 500 });
    else return NextResponse.json(null, { status: 500 });
  }
}