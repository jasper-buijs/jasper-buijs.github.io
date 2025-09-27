"use client";

import { State } from "@/app/live/desktop";
import { useParticipants, useTracks } from "@livekit/components-react";
import { Track } from "livekit-client";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FidgetSpinner, TailSpin } from "react-loader-spinner";

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

/*const liveBgs = [
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
] as `bg-[url(/bgs/live${number}.png)]`[];*/

/*const StreamPlayer = () => {
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
                  </StartMediaButton>*//*}
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
                {/*<div className={"block bg-white h-full w-full"} />*//*}
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
            </div>*//*}
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
}*/

const stateMessages = {
  0: "Fetching stream from host...", // LOADING_PAGE
  1: "Loading stream...", // LOADING_STREAM
  2: "Could not verify you are a member of Heilige Maagden. If you are, sign out and back in.", // UNAUTH
  3: "An error occured. Reload, or try signing out and back in.", // ERROR
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
    //videoElement.height = 1080;
    //videoElement.width = 1920;

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
    videoElement.play();

    /*const videoTrack = videoSource && videoSource.publication.track;
    const audioTrack = audioSource && audioSource.publication.track;

    console.log(videoTrack)

    videoTrack?.attach(videoElement.current);
    audioTrack?.attach(videoElement.current);

    console.log(videoElement)

    videoElement.play();*/

    /*return () => {
      if (videoElement) {
        videoElement.srcObject = null;
      }
    };*/
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