import { RoomServiceClient, TrackSource } from "livekit-server-sdk";
import { NextResponse } from "next/server";

export const revalidate = 0;

export type ActiveRoom = {
  roomName: string;
  streamerParticipantName: string;
  viewerCount: number;
};

export async function GET() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const httpUrl = process.env.LIVEKIT_URL;
  if (!apiKey || !apiSecret || !httpUrl) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const roomService = new RoomServiceClient(httpUrl, apiKey, apiSecret);
    const rooms = await roomService.listRooms();
    const participantsByRoom = await Promise.all(
      rooms.map((room) => roomService.listParticipants(room.name))
    );

    const activeRooms = participantsByRoom.flatMap((participants, index) => {
      const streamer = participants.find((participant) =>
        participant.tracks.some((track) => track.source === TrackSource.SCREEN_SHARE)
      );
      if (!streamer) return [];

      return [{
        roomName: rooms[index].name,
        streamerParticipantName: streamer.name || streamer.identity,
        viewerCount: participants.filter(
          (participant) => participant.identity !== streamer.identity
        ).length,
      }];
    });

    return NextResponse.json(activeRooms);
  } catch (error) {
    console.error("Failed to get active LiveKit rooms:", error);
    return NextResponse.json(
      { error: "Failed to get active rooms" },
      { status: 500 }
    );
  }
}
