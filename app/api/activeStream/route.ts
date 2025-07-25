import { RoomServiceClient } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";

// disable cache for endpoint result
export const revalidate = 0;

export async function GET(req: NextRequest){
  const room = req.nextUrl.searchParams.get('room');
  if (!room) {
    return NextResponse.json({ error: 'Missing "room" query parameter' }, { status: 400 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const httpUrl = process.env.LIVEKIT_URL
  if (!apiKey || !apiSecret || !httpUrl) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const rsc = new RoomServiceClient(httpUrl, apiKey, apiSecret);

  try {
    const rooms = await rsc.listRooms([room]);

    if (rooms.length > 0) {
      const participants = await rsc.listParticipants(room);
      return NextResponse.json({ live: participants.some((p) => p.identity.includes("ingress")) });
    } else {
      return NextResponse.json({ live: false });
    }
  } catch (e) {
    return NextResponse.json({ live: false });
  }

}