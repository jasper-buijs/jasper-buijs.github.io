"use client";

import {
  AudioTrack,
  useParticipants, useStartAudio, useStartVideo,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { CircleUserRound, Expand, Pause, Play, Volume2, VolumeOff } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Poster images (should be 16:9)
/*const liveImages = [
  "/bgs/live1.png",
  "/bgs/live2.png",
  "/bgs/live3.png",
  "/bgs/live4.png",
  "/bgs/live5.png",
  "/bgs/live6.png",
  "/bgs/live7.png",
  "/bgs/live8.png",
  "/bgs/live9.png",
  "/bgs/live10.png",
  "/bgs/live11.png",
] as `/bgs/live${number}.png`[]; */

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

const StreamPlayer = () => {
  // const { name: roomName, state: roomState } = useRoomContext();
  // const roomInstance = useRoomContext();
  const participants = useParticipants();
  const remoteVideoTracks = useTracks([Track.Source.ScreenShare]);
  const remoteAudioTracks = useTracks([Track.Source.ScreenShareAudio]);

  const [ muted, setMuted ] = useState<boolean>(false);
  const [ volume, setVolume ] = useState<number>(1);

  const { mergedProps: audioProps, canPlayAudio } = useStartAudio({ props: {id: "a"} });
  const { mergedProps, canPlayVideo } = useStartVideo({ props: audioProps });
  const { style, ...restProps } = mergedProps;
  style.display = canPlayAudio && canPlayVideo ? 'none' : 'block';

  const videoElement = useRef<HTMLVideoElement>(null);

  const [ bgImage, setBgImage ] = useState<`bg-[url(/bgs/live${number}.png)]`>(); //liveBgs[Math.floor(Math.random() * liveBgs.length)]
  // const [ poster, setPoster ] = useState<`/bgs/live${number}.png`>();
  useEffect(() => {
    const imageNumber = Math.floor(Math.random() * liveBgs.length);
    setBgImage(liveBgs[imageNumber]);
    // setPoster(liveImages[imageNumber]);
  }, []);

  const [init, setInit] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInit(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={"block fixed z-10 top-20 bottom-20 left-12 right-12 overflow-hidden"}>
        <div className={"h-full w-full flex items-center justify-left"}>
          { remoteVideoTracks.map((track) => (
            <>
              <div
                key={track.participant.identity + remoteVideoTracks.indexOf(track) + "vid"}
                className={"flex-shrink-0 h-full max-w-full aspect-[1920/1120]"}
              >
                <VideoTrack
                  trackRef={track}
                  className={`!h-[calc(100%-40px)] !w-fit !max-w-full object-cover bg-black`}
                  controls={false}
                  autoPlay={false}
                  ref={videoElement}
                />
                <div className={"h-8 mt-2 w-full flex"}>
                  {/*<StartMediaButton
                    className={`h-8 aspect-square !bg-gray-500 !rounded-md !p-1 !mr-2 inline-block align-middle justify-start`}
                  >
                    <Play />
                  </StartMediaButton>*/}
                  <button
                    className={`h-8 aspect-square !bg-gray-500 !rounded-md !p-1 !mr-2 inline-block align-middle justify-start`}
                    onClick= { mergedProps.onClick }
                    style={style}
                  >
                    <Play />
                  </button>
                  { canPlayVideo && canPlayAudio &&
                    <button
                      onClick={() => {
                        videoElement.current?.paused ? setMuted(false) : setMuted(true);
                        videoElement.current?.paused ? videoElement.current.play() : videoElement.current?.pause();
                      }}
                      className={"h-8 aspect-square bg-gray-500 rounded-md p-1 mr-2 inline-block align-middle"}
                    >
                      {videoElement.current?.paused ? <Play /> : <Pause />}
                    </button>
                  }
                  <button
                    onClick={() => videoElement.current?.requestFullscreen({ navigationUI: "hide" })}
                    className={"h-8 aspect-square bg-gray-500 rounded-md p-1 mr-2 inline-block align-middle"}
                  >
                    <Expand />
                  </button>
                  <button
                    onClick={() => setMuted(m => !m)}
                    className={"h-8 aspect-square bg-gray-500 rounded-md p-1 mr-2 inline-block align-middle"}
                  >
                    {muted ? <VolumeOff /> : <Volume2 />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    className={"inline-block h-8 bg-gray-500 w-[calc(100%-40px)] max-w-52 align-middle"}
                  />
                </div>
              </div>
            </>
          ))}
          { (!init || (remoteVideoTracks.length == 0 && participants.some(p => p.identity.includes("ingress")))) && (
            <>
              <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
                <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                  Loading stream...
                </div>
              </div>
            </>
          )}
          { init && remoteVideoTracks.length == 0 && !participants.some(p => p.identity.includes("ingress")) && (
            <>
              <div className={"flex-shrink-0 h-full max-w-full aspect-video"}>
                {/*<div className={"block bg-white h-full w-full"} />*/}
                <div className={`w-full h-full ${bgImage} bg-cover bg-center text-white text-xl italic flex justify-center items-end pb-4`}>
                  The stream is offline.
                </div>
              </div>
            </>
          )}
          <div className={"flex-1 ml-2 h-full"}>
            <div className={"grid grid-cols-[repeat(auto-fit,_minmax(64px,_1fr))] gap-2 h-[80%] content-start"}>
              { participants.map((participant) =>
                participant.identity && !participant.identity.includes("ingress") && participant.attributes.profilePicture != "no-image" ? (
                  <>
                    <Image
                      src={participant.attributes.profilePicture}
                      alt={participant.identity}
                      key={participant.identity + "img"}
                      height={64}
                      width={64}
                      className={"rounded-[50%] object-cover"}
                    />
                  </>
                ) : !participant.identity.includes("ingress") && (
                  <>
                    <CircleUserRound
                      size={64}
                      key={participants.indexOf(participant) + "img"}
                      className={"object-cover"}
                    />
                  </>
                )
              )}
            </div>
            {/*<div className={"h-[20%] content-end"}>
            </div>*/}
          </div>
        </div>
      </div>
      { remoteAudioTracks.map((track) => (
        <>
          <AudioTrack
            trackRef={track}
            key={track.participant.identity + remoteAudioTracks.indexOf(track) + "aud"}
            muted={muted}
            volume={volume}
          />
        </>
      ))}
    </>
  );
}

export default StreamPlayer;