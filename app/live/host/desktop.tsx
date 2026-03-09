import { redirect } from "next/navigation";
import HostPageClt from "@/app/live/host/desktop.client";

interface PageProps {
  at: string | undefined;
  rt: string | undefined;
}
export default async function HostPage({
  at,
  rt,
}: PageProps) {
  if (!at || !rt) {
    redirect("/"); //TODO better error handling!
  }

  const serverUrl = process.env
    .LIVEKIT_WS_URL!
    .replace("wss://", "https://")
    .replace("ws://", "http://");

  return <HostPageClt authToken={at} roomToken={rt} serverUrl={serverUrl} />;
};