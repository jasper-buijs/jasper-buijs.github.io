import MobileOrDesktop from "@/app/live/watch/[roomName]/version-switch";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    roomName: string;
  }>;
}
export default async function WatchPage({ params }: PageProps) {
  const { roomName } = await params;
  if (!roomName) redirect("/");

  const serverUrl = process.env.LIVEKIT_WS_URL!.replace("wss://", "https://").replace("ws://", "http://");

  return <MobileOrDesktop roomName={roomName} serverUrl={serverUrl} />;
}
