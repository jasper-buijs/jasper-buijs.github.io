import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

// disable cache for endpoint result
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized: no authentication session" }, { status: 401 });
  if (!session.user?.guilds || !(session.user.guilds.length >= 1)) return NextResponse.json({ error: "Problem: no guilds, waiting" }, { status: 209 });
  if (!session.user.guilds.some((g) => g.id == process.env.GUILD_ID))
    return NextResponse.json({ error: "Unauthorized: incorrect guild collection" }, { status: 401 });

  const room = req.nextUrl.searchParams.get('room');
  if (!room) {
    return NextResponse.json({ error: 'Missing "room" query parameter' }, { status: 400 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.LIVEKIT_WS_URL;
  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const accessToken = new AccessToken(apiKey, apiSecret, { identity: session.user.name || "Viewer", attributes: { profilePicture: session.user.image || "no-image" } });
  accessToken.addGrant({ room, roomJoin: true, canPublish: false, canSubscribe: true });

  return NextResponse.json(
    { token: await accessToken.toJwt() },
    { headers: { "Cache-Control": "no-store" } }
  );
}