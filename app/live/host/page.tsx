"use server";

import MobileOrDesktop from "@/app/live/host/version-switch";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{
    at: string | undefined;
    rt: string | undefined;
  }>;
}
export default async function Page({
  searchParams
}: PageProps) {
  //const params = use(searchParams);
  const { at, rt } = await searchParams;

  if (!at || !rt) {
    redirect("/"); //TODO better error handling!
  }

  const serverUrl = process.env
    .LIVEKIT_WS_URL!
    .replace("wss://", "https://")
    .replace("ws://", "http://");

  return <MobileOrDesktop at={at} rt={rt} serverUrl={serverUrl} />

  //return isMobile ? <MobilePage /> : <DesktopPage at={params.at} rt={params.rt} />;
}
