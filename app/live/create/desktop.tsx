"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import { useState } from "react";

const CreatePage = () => {
  const room = "live-room"
  const [info, setInfo] = useState<{ url: string, streamKey: string} | null>(null);
  async function fetchIngress() {
    const res = await fetch(`/api/ingress?room=${room}`);
    const data = await res.json();
    setInfo(data);
    console.log(data);
  }

  return (
    <>
      <NavBar activePage={"none"} />
      <Paragraph title={"OBS Streaming Setup"} emoji={"🎥"}>
        {info ? (
          <ul>
            <li><strong>Server URL:</strong> {info.url}</li>
            <li><strong>Stream Key:</strong> {info.streamKey}</li>
          </ul>
        ) : (
          <button onClick={fetchIngress} className={"text-[#cfb53b] underline"}>Generate Stream Credentials</button>
          // Add option to delete ingress again?
        )}
        <p>Copy these into OBS under <em>Settings &rarr; Stream</em>.</p>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default CreatePage;