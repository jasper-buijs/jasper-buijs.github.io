import { Controller, CreateIngressParams } from "@/app/components/live/lib/controller";
import { NextRequest, NextResponse } from "next/server";

// TODO: validate request with Zod [not by me ??]

export async function POST(req: NextRequest) {
  const controller = new Controller();
  console.log("running createIngress/route.ts");

  try {
    const reqBody = await req.json();
    const response = await controller.createIngress(reqBody as CreateIngressParams);
    //await controller.createIngress(reqBody as CreateIngressParams).then((res) => {
    //  console.log("createIngress/route.ts response", res);
    //  return NextResponse.json(res);
    //});
    console.log("createIngress/route.ts response", response);
    return NextResponse.json(response);
  } catch (e) {
    if (e instanceof Error) return new NextResponse(e.message, { status: 500 });
    else return new NextResponse(null, { status: 500 });
  }
}