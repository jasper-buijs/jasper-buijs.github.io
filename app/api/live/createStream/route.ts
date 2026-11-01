import { Controller, CreateStreamParams } from "@/app/components/live/lib/controller";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const controller = new Controller();

  try {
    const [reqBody, session] = await Promise.all([
      req.json() as Promise<CreateStreamParams>,
      auth.api.getSession({ headers: await headers() }),
    ]);
    const response = await controller.createStream(
      { ...reqBody, avatar_image: session?.user.image || undefined }
    );
    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) return NextResponse.json(e.message, { status: 500 });
    else return NextResponse.json(null, { status: 500 });
  }
}