"use client";

import { redirect, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  if (searchParams.has("stream")) redirect("http://str.heiligemaagden.com:8888/mystream/index.m3u8");
  else redirect("http://str.heiligemaagden.com:8888/mystream");
};

export default Page;
