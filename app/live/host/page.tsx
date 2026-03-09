"use client";

import { useEffect, useState, use } from "react";
import MobilePage from "./mobile";
import DesktopPage from "./desktop";

interface PageProps {
  searchParams: Promise<{
    at: string | undefined;
    rt: string | undefined;
  }>;
}
export default function Page({
  searchParams
}: PageProps) {
  const params = use(searchParams);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
  }, []);

  if (isMobile === null) {
    return <h1>Loading...</h1>;
  }

  return isMobile ? <MobilePage /> : <DesktopPage at={params.at} rt={params.rt} />;
}
