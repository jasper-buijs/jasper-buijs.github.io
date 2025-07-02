import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

// disable cache for endpoint result
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get('room');
  const username = req.nextUrl.searchParams.get('username');
  if (!room) {
    return NextResponse.json({ error: 'Missing "room" query parameter' }, { status: 400 });
  } else if (!username) {
    return NextResponse.json({ error: 'Missing "username" query parameter' }, { status: 400 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.LIVEKIT_URL;
  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const accessToken = new AccessToken(apiKey, apiSecret, { identity: username });
  accessToken.addGrant({ room, roomJoin: true, canPublish: false, canSubscribe: true });

  return NextResponse.json(
    { token: await accessToken.toJwt() },
    { headers: { "Cache-Control": "no-store" } }
  );
}