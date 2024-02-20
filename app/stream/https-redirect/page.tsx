"use client";

import { redirect, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  if (searchParams.has("stream")) redirect("https://heiligemaagden.com/stream/https-redirect?stream");
  else redirect("https://heiligemaagden.com/stream/https-redirect");
};

export default Page;
