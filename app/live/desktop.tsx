"use client";

export const fetchCache = 'force-no-cache';

import FooterBar from "@/app/components/FooterBar";
import StreamPlayer from "@/app/components/live/StreamPlayer";
import NavBar from "@/app/components/NavBar";
import { RoomContext } from "@livekit/components-react";
import { Room } from "livekit-client";
import "@livekit/components-styles";
import { useState, useEffect } from "react";

const RoomElement = () => {
  const room = "live-room";
  let [_accessToken, setAccessToken] = useState<string>();

  const [roomInstance] = useState(() => new Room({
    adaptiveStream: true,
    dynacast: true,
    disconnectOnPageLeave: true,
  }));

  useEffect(() => {
      let mounted = true;
      (async () => {
        try {
          const resp = await fetch(`/api/token?room=${room}`); // &username=${name}
          const data = await resp.json();
          if (!mounted) return;
          if (data.token) {
            console.log("Token: " + data.token);
            await roomInstance.connect((process.env.NEXT_PUBLIC_LIVEKIT_URL as string), data.token);
            setAccessToken(data.token);
          }
        } catch (e) {
          console.error(e);
        }
      })();

      return () => {
        mounted = false;
        roomInstance.disconnect();
      }
    }, [roomInstance]);


  return (
    <>
      <NavBar activePage={"none"} />
      <RoomContext.Provider value={roomInstance}>
        <StreamPlayer />
      </RoomContext.Provider>
      <FooterBar />
    </>
  );
}

export default RoomElement;