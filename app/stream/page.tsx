"use client";

import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import { useState, useEffect } from "react";
import redirect from "../components/redirect";

const LiveStreamMediaMTX = () => {
  redirect("/stream", false);
  const [frame, setFrame] = useState(<div className="text-[#1E1E1E] dark:text-[#FFFFFF] h-[75vh] leading-[75vh] text-center">The stream is loading...</div>);
  useEffect(() => {
    fetch("https://str.heiligemaagden.com/mystream/index.m3u8", { cache: "no-store" })
      .then((r) => {
        if (!r) setFrame(<div className="text-[#1E1E1E] dark:text-[#FFFFFF] h-[75vh] leading-[75vh] text-center">The stream is offline.</div>);
        else if (r.status != 200) setFrame(<div className="text-[#1E1E1E] dark:text-[#FFFFFF] h-[75vh] leading-[75vh] text-center">The stream is offline.</div>);
        else
          setFrame(
            <iframe src="https://str.heiligemaagden.com/mystream/" allowFullScreen title="Live Stream" className="block h-[75vh] w-full border-none">
              The stream is currently offline.
            </iframe>,
          );
      })
      .catch(() => {
        setFrame(<div className="text-[#1E1E1E] dark:text-[#FFFFFF] h-[75vh] leading-[75vh] text-center">The stream is offline.</div>);
      });
  }, []);
  return (
    <>
      <NavBar activePage="none" />
      <div className="bg-[#D6D6D6] dark:bg-transparent px-4 py-2 mx-12 my-4">
        {
          <iframe src="https://str.heiligemaagden.com/mystream/" allowFullScreen title="Live Stream" className="block h-[75vh] w-full border-none">
            The stream is currently offline.
          </iframe>
        }
        {/*frame*/}
      </div>
      <FooterBar />
    </>
  );
};

export default LiveStreamMediaMTX;
