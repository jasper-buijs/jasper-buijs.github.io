import { RoomServiceClient, TrackSource } from "livekit-server-sdk";
import { NextResponse } from "next/server";

// disable cache for endpoint result
export const revalidate = 0;

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const httpUrl = process.env.LIVEKIT_URL;
  if (!apiKey || !apiSecret || !httpUrl) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  try {
    const roomService = new RoomServiceClient(httpUrl, apiKey, apiSecret);
    const rooms = await roomService.listRooms();
    const participantsByRoom = await Promise.all(
      rooms.map((room) => roomService.listParticipants(room.name))
    );

    const live = participantsByRoom.some((participants) =>
      participants.some((participant) =>
        participant.tracks.some((track) => track.source === TrackSource.SCREEN_SHARE)
      )
    );

    return NextResponse.json({ live });
  } catch (error) {
    console.error("Failed to check active LiveKit streams:", error);
    return NextResponse.json({ error: "Failed to check active streams" }, { status: 500 });
  }
}