"use client";

import { State } from "@/app/live/desktop";
import { useParticipants, useTracks } from "@livekit/components-react";
import { Track } from "livekit-client";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FidgetSpinner, TailSpin } from "react-loader-spinner";


const stateMessages = {
  0: "Fetching stream from host...", // LOADING_PAGE
  1: "Loading stream...", // LOADING_STREAM
  2: "Could not verify you are a member of Heilige Maagden. If you are, sign out and back in.", // UNAUTH
  3: "An error occurred. Reload, or try signing out and back in.", // ERROR
  4: "Loading complete!", // SUCCESS
  5: "Reconnecting...", // RECONNECTING
  6: "The stream is offline." // OFFLINE
}

const Loader = () => {
  const n = Math.floor(Math.random() * 70);
  if (n == 67) return (
    <FidgetSpinner
      visible
      height="80"
      width="80"
      backgroundColor="#CFB53B"
    />
  );
  return(
    <TailSpin
      visible
      height="80"
      width="80"
      color={"white"}
      radius="1"
    />
  );
};

interface StreamPlayerProps {
  state: State
}
const StreamPlayer = ({ state }: StreamPlayerProps) => {
  const videoRef = useRef(null);

  const videoSource = useTracks([Track.Source.ScreenShare])[0];
  const audioSource = useTracks([Track.Source.ScreenShareAudio])[0];

  const participants = useParticipants();

  useEffect(() => {
    const videoElement: any = videoRef.current;

    const prevMuted = videoElement.muted;
    const prevVolume = videoElement.volume;

    const videoTrack = videoSource && videoSource.publication.track;
    const videoMediaStream = videoTrack && videoTrack.mediaStream;
    //const videoMediaStreamTrack = videoMediaStream?.getTracks();
    //if (videoSource && videoSource.publication.track && !isTrackReferencePlaceholder(videoSource))
    //  videoMediaStream.addTrack(videoSource.publication.track.mediaStreamTrack);

    const audioTrack = audioSource && audioSource.publication.track;
    const audioMediaStream = audioTrack && audioTrack.mediaStream;
    //const audioMediaStreamTrack = audioMediaStream?.getTracks();
    //if (audioSource && audioSource.publication.track && !isTrackReferencePlaceholder(audioSource))
    //  audioMediaStream.addTrack(audioSource.publication.track.mediaStreamTrack);

    const combinedStream = videoMediaStream && audioMediaStream && new MediaStream([
      ...videoMediaStream?.getTracks(),
      ...audioMediaStream?.getTracks(),
      //...videoMediaStreamTrack,
      //...audioMediaStreamTrack

    ]);

    videoElement.srcObject = combinedStream;
    videoTrack?.attach(videoElement);
    audioTrack?.attach(videoElement);
    //if (videoMediaStreamTrack) videoMediaStreamTrack[0].enabled = true;
    //if (audioMediaStreamTrack) audioMediaStreamTrack[0].enabled = true;

    videoElement.muted = prevMuted;
    videoElement.volume = prevVolume;

    videoElement.play();

  }, [videoSource, audioSource]);

  return (
    <div className={"fixed top-20 bottom-20 left-12 right-12 grid grid-cols-[1fr_minmax(64px,_128px)]"}>
      <div className={"absolute top-0 bottom-0 left-0 !aspect-video col-start-1 z-10 flex-col items-center justify-center text-center " + (state == State.SUCCESS ? "hidden" : "flex")}>
        {!(state == State.OFFLINE) && <Loader />}
        <div className={"italic pt-2"}>{ stateMessages[state] }</div>
      </div>
      <div className={"absolute top-0 bottom-0 left-0 !aspect-video col-start-1"}>
        <video ref={videoRef}
          controls={state == State.SUCCESS}
          className={`h-full w-full object-contain bg-black`}
          width="1920"
          height="1080"
        />
      </div>
      <div className={"absolute top-0 bottom-0 right-0 left-16 col-start-2"}>
        { participants.map((participant) =>
          participant.identity && !participant.identity.includes("ingress") && participant.attributes.profilePicture != "no-image" ? (
            <>
              <Image
                src={participant.attributes.profilePicture}
                alt={participant.identity}
                key={participant.identity + "img"}
                height={128}
                width={128}
                className={"rounded-[50%] object-cover w-full !aspect-square mb-2"}
              />
            </>
          ) : !participant.identity.includes("ingress") && (
            <>
              <CircleUserRound
                size={128}
                key={participants.indexOf(participant) + "img"}
                className={"object-cover w-full h-fit !aspect-square mb-2"}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default StreamPlayer;