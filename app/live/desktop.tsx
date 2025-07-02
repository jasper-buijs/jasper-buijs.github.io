"use client";

import { ControlBar, GridLayout, ParticipantTile, RoomAudioRenderer, useTracks, RoomContext } from "@livekit/components-react"
import { Room, Track } from "livekit-client"
import "@livekit/components-styles";
import { useState, useEffect } from "react";

const DesktopPage = () => {
  const room = "live-room";
  const name = "username";
  const [roomInstance] = useState(() => new Room({
    adaptiveStream: true,
    dynacast: true
  }));

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const resp = await fetch(`/api/token?room=${room}&username=${name}`);
        const data = await resp.json();
        if (!mounted) return;
        if (data.token) {
          await roomInstance.connect((process.env.LIVEKIT_URL as string), data.token);
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

  {/*if (token === "") {
    return <div>Getting token...</div>;
  }*/}

  return (
    <RoomContext.Provider value={roomInstance}>
      <div data-lk-theme="default" style={{ height: "100dvh" }}>
        <RoomLayoutElement />
        <RoomAudioRenderer />
        <ControlBar />
      </div>
    </RoomContext.Provider>
  )
}

const RoomLayoutElement = () => {
  const tracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: true },
    { source: Track.Source.ScreenShare, withPlaceholder: false }
  ],
  {onlySubscribed: false}
  );

  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      <ParticipantTile />
    </GridLayout>
  );
}

export default DesktopPage;