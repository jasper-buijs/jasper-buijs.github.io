"use server";

import { authOptions } from "@/auth";
import {
  AccessToken,
  IngressAudioOptions,
  IngressClient,
  IngressInput,
  IngressVideoOptions,
  TrackSource,
} from "livekit-server-sdk";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  //if (session.user?.email != process.env.CREATE_INGRESS_EMAIL) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user?.guilds || !(session.user.guilds.length >= 1)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!session.user.guilds.some((g) => g.id == process.env.GUILD_ID))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = new IngressClient(process.env.LIVEKIT_URL as string, process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET);
  const response = await client.createIngress(IngressInput.WHIP_INPUT, {
    name: "OBS Streaming Ingress",
    roomName: req.nextUrl.searchParams.get('room') || "live-room",
    participantIdentity: "obs-ingress-participant",
    participantName: "OBS Stream",
    enableTranscoding: false,
    video: new IngressVideoOptions({
      source: TrackSource.SCREEN_SHARE
    }),
    audio: new IngressAudioOptions({
      source: TrackSource.SCREEN_SHARE_AUDIO
    }),
  });

  const token = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_API_SECRET, {
    identity: "Test OBS",
    ttl: 3600
  });
  token.addGrant({
    room: "live-room",
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
    canSubscribeMetrics: true,
    canUpdateOwnMetadata: true
  });

  return NextResponse.json(
    { url: response.url, streamKey: response.streamKey },
    { status: 200 }
  );
}