"use server";

import { RCONClient } from "@minecraft-js/rcon";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let username: string;
  try {
    username = await req.json();
  } catch {
    return new NextResponse("Invalid request body", { status: 400 });
  }

  if (!username || typeof username !== "string" || username.trim().length === 0) {
    return new NextResponse("Username is required", { status: 400 });
  }

  const client = new RCONClient(
    process.env.RCON_IP as string,
    process.env.RCON_PASSWORD as string,
    Number(process.env.RCON_PORT as string),
  );

  try {
    await connectWithTimeout(client, 10000);

    const output = await client.executeCommandAsync(
      `whitelist add ${username.trim()}`,
      10000
    );

    console.log("RCON Command executed:", output);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("RCON Error:", message);
    return new NextResponse(`RCON error: ${message}`, { status: 500 });
  } finally {
    client.disconnect();
  }
}

function connectWithTimeout(client: RCONClient, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Connection timeout"));
    }, timeout);

    client.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });

    client.on("authenticated", () => {
      clearTimeout(timer);
      resolve();
    });

    client.connect();
  });
}