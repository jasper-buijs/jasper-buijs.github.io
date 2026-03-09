import { Controller, CreateIngressParams } from "@/app/components/live/lib/controller";
import { NextRequest, NextResponse } from "next/server";

// TODO: validate request with Zod [not by me ??]

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const reqBody = await req.json();
    const response = await controller.createIngress(reqBody as CreateIngressParams);
    return NextResponse.json(response);
  } catch (e) {
    if (e instanceof Error) return new NextResponse(e.message, { status: 500 });
    else return new NextResponse(null, { status: 500 });
  }
}