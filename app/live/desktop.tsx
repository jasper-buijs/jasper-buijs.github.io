"use client";

export const fetchCache = 'force-no-cache';

import FooterBar from "@/app/components/FooterBar";
import StreamPlayer from "@/app/components/live/StreamPlayer";
import NavBar from "@/app/components/NavBar";
import { RoomContext } from "@livekit/components-react";
import { ConnectionState, Room } from "livekit-client";
import "@livekit/components-styles";
import { useEffect, useState } from "react";

enum State {
  LOADING_PAGE = 0,
  LOADING_STREAM,
  UNAUTHORIZED,
  ERROR,
  SUCCESS,
  RECONNECTING,
  OFFLINE
}

const liveBgs = [
  "bg-[url(/bgs/live1.png)]",
  "bg-[url(/bgs/live2.png)]",
  "bg-[url(/bgs/live3.png)]",
  "bg-[url(/bgs/live4.png)]",
  "bg-[url(/bgs/live5.png)]",
  "bg-[url(/bgs/live6.png)]",
  "bg-[url(/bgs/live7.png)]",
  "bg-[url(/bgs/live8.png)]",
  "bg-[url(/bgs/live9.png)]",
  "bg-[url(/bgs/live10.png)]",
  "bg-[url(/bgs/live11.png)]",
] as `bg-[url(/bgs/live${number}.png)]`[];

const RoomElement = () => {
  const room = "live-room";
  let [state, setState] = useState<State>(State.LOADING_PAGE);
  let [_accessToken, setAccessToken] = useState<string>();

  const [ isStreamActive, setStreamActive ] = useState<boolean>(false);

  useEffect(() => {
    fetch(`/api/activeStream?room=${room}`).then((r) => {
      r.json().then((data) => {
        setStreamActive(data.live);
      });
    }).catch((_e) => setStreamActive(false)); // &username=${name}
  }, [isStreamActive]);

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
          //if (resp.status == 401) return setState(State.UNAUTHORIZED);
          if ([209, 401].includes(resp.status)) return setState(State.UNAUTHORIZED);
          if ([400, 500].includes(resp.status)) return setState(State.ERROR);
          console.log(state, resp.status)
          const data = await resp.json();
          if (!mounted) return;
          if (data.token) {
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

  useEffect(() => {
    switch (roomInstance.state) {
      case ConnectionState.Connected: setState(isStreamActive ? State.SUCCESS : State.OFFLINE); break;
      case ConnectionState.Connecting: setState(State.LOADING_STREAM); break;
      case ConnectionState.Reconnecting: setState(State.RECONNECTING); break;
      case ConnectionState.SignalReconnecting: setState(State.RECONNECTING); break;
      case ConnectionState.Disconnected: setState(State.LOADING_PAGE); break;
      default: setState(State.ERROR);
    }
    console.log(state, roomInstance.state);
  }, [roomInstance.state, isStreamActive]);

  const [ bgImage, setBgImage ] = useState<`bg-[url(/bgs/live${number}.png)]`>(); //liveBgs[Math.floor(Math.random() * liveBgs.length)]
   // const [ poster, setPoster ] = useState<`/bgs/live${number}.png`>();
   useEffect(() => {
     const imageNumber = Math.floor(Math.random() * liveBgs.length);
     setBgImage(liveBgs[imageNumber]);
     // setPoster(liveImages[imageNumber]);
   }, []);


  //if (state == State.SUCCESS) {
  //if (true) {
  return (
    <>
      <NavBar activePage={"none"} />
      <RoomContext.Provider value={roomInstance}>
        <StreamPlayer state={state} />
      </RoomContext.Provider>
      <FooterBar />
    </>
  );
  /*} else if (state == State.LOADING_PAGE) {
    return (
      <>
        <NavBar activePage={"none"} />
        <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
          <div className={"h-full w-full flex items-center justify-left"}>
            <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
              <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                Attempting to connect...
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    );
  } else if (state == State.LOADING_STREAM) {
    return (
      <>
        <NavBar activePage={"none"} />
        <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
          <div className={"h-full w-full flex items-center justify-left"}>
            <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
              <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                Connecting...
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    );
  } else if (state == State.RECONNECTING) {
    return (
      <>
        <NavBar activePage={"none"} />
        <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
          <div className={"h-full w-full flex items-center justify-left"}>
            <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
              <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                Trying to reconnect...
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    );
  } else if (state == State.UNAUTHORIZED) {
    return (
      <>
        <NavBar activePage={"none"} />
        <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
          <div className={"h-full w-full flex items-center justify-left"}>
            <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
              <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                You are not correctly authenticated. Try signing out and back in!
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    );
  } else {
    return (
      <>
        <NavBar activePage={"none"} />
        <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
          <div className={"h-full w-full flex items-center justify-left"}>
            <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
              <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                An error occurred!
              </div>
            </div>
          </div>
        </div>
        <FooterBar />
      </>
    );
  }*/
}

export default RoomElement;
export { State };