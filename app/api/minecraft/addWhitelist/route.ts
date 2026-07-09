"use server";

import { RCONClient, RCONPacketType } from "@minecraft-js/rcon";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const username: string = await req.json();
  const client = new RCONClient(
    process.env.RCON_IP as string,
    process.env.RCON_PASSWORD as string,
    Number(process.env.RCON_PORT as string),
  );
  //const successfullIds: number[] = [];

  client.on("error", (error) => {
    console.log("RCON Error:", error.message);
  })

  client.on('response', (packet, requestId) => {
    console.log("RCON Payload:", packet.payload)
    if (packet.type == RCONPacketType.RESPONSE) {
      //successfullIds.push(requestId);
      return new NextResponse(null, { status: 200 });
    }
    else return new NextResponse("Received bad response");
  });

  client.connect();
  // if (!client.connected) return new NextResponse("Could not connect to RCON", { status: 500 });

  setTimeout(() => {
    client.executeCommand(`whitelist add ${username}`);
  }, 5000);

  return new NextResponse(null, { status: 200 });
}