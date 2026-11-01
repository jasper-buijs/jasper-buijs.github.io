import { ParticipantMetadata, RoomMetadata } from "@/app/components/live/lib/controller";
import { PresenceDialog } from "@/app/components/live/PresenceDialog";
import { useAuthToken } from "@/app/components/live/TokenContext";
import {
  AudioTrack,
  useDataChannel,
  useLocalParticipant,
  useParticipants,
  useRoomContext,
  useStartAudio,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { Avatar, Badge, Button, Flex, Grid, Slider, Text, Theme } from "@radix-ui/themes";
import Confetti from "js-confetti";
import { ConnectionState, createLocalScreenTracks, LocalVideoTrack, Track, TrackEvent } from "livekit-client";
import {
  Check,
  Copy,
  Eye,
  EyeOff,
  Maximize,
  Minimize,
  MonitorCheck,
  MonitorUp,
  Play,
  Square,
  Volume, Volume1,
  Volume2, VolumeOff, VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

function ConfettiCanvas() {
  const [confetti, setConfetti] = useState<Confetti>();
  const [decoder] = useState(() => new TextDecoder());
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useDataChannel("reactions", (data) => {
    const options: { emojis?: string[]; confettiNumber?: number } = {};

    if (decoder.decode(data.payload) !== "🎉") {
      options.emojis = [decoder.decode(data.payload)];
      options.confettiNumber = 12;
    }

    confetti?.addConfetti(options);
  });

  useEffect(() => {
    setConfetti(new Confetti({ canvas: canvasEl.current ?? undefined }));
  }, []);

  return <canvas ref={canvasEl} className={"absolute h-full w-full pointer-events-none"} />;
}

export function StreamPlayer({ isHost = false }) {
  const [_, copy] = useCopyToClipboard();

  const [localVideoTrack, setLocalVideoTrack] = useState<LocalVideoTrack>();
  const [screenShareActive, setScreenShareActive] = useState(false);
  const localVideoEl = useRef<HTMLVideoElement>(null);

  const [playVideo, setPlayVideo] = useState<boolean>(true);
  const [playFullscreen, setPlayFullscreen] = useState<boolean>(false);
  const [playMuted, setPlayMuted] = useState<boolean>(false);
  const [playVolume, setPlayVolume] = useState<number>(100);
  const fullScreenVideoEl = useRef<HTMLDivElement>(null);

  const { mergedProps: startAudioProps, canPlayAudio } = useStartAudio({
    props: { className: "" },
  });

  useEffect(() => {
    const syncFullscreenState = () => {
      setPlayFullscreen(document.fullscreenElement === fullScreenVideoEl.current);
    };
    document.addEventListener("fullscreenchange", syncFullscreenState);
    syncFullscreenState();
    return () => document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  const handleFullscreen = async () => {
    if (!fullScreenVideoEl.current) return;
    try {
      if (document.fullscreenElement === fullScreenVideoEl.current) {
        await document.exitFullscreen();
      } else {
        await fullScreenVideoEl.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Failed to toggle fullscreen:", error);
    }
  };

  const { metadata, name: roomName, state: roomState } = useRoomContext();
  const roomMetadata = (metadata && JSON.parse(metadata)) as RoomMetadata;
  const { localParticipant } = useLocalParticipant();
  const localMetadata = localParticipant.metadata ? (JSON.parse(localParticipant.metadata) as ParticipantMetadata) : undefined;
  const canHost = isHost || (localMetadata?.invited_to_stage && localMetadata?.hand_raised);
  const participants = useParticipants();
  const showNotification = isHost
    ? participants.some((p) => {
        const metadata = p.metadata ? (JSON.parse(p.metadata) as ParticipantMetadata) : undefined;
        return metadata?.hand_raised && !metadata?.invited_to_stage;
      })
    : localMetadata?.invited_to_stage && !localMetadata?.hand_raised;

  const startScreenShare = async () => {
    try {
      const tracks = await createLocalScreenTracks({ audio: true, systemAudio: "include", surfaceSwitching: "include", resolution: { width: 1080, height: 720 } });
      const screenTrack = tracks.find((t) => t.source == Track.Source.ScreenShare);
      if (screenTrack && localVideoEl.current) screenTrack.attach(localVideoEl.current);
      screenTrack?.on(TrackEvent.Ended, () => setScreenShareActive(false));
      setLocalVideoTrack(screenTrack as LocalVideoTrack);
      setScreenShareActive(true);
    } catch (e) {
      console.error("Failed to start screen share:", e);
    }
  };

  const remoteVideoTracks = useTracks([Track.Source.ScreenShare]).filter((t) => t.participant.identity != localParticipant.identity);
  const remoteAudioTracks = useTracks([Track.Source.ScreenShareAudio]).filter((t) => t.participant.identity != localParticipant.identity);

  const authToken = useAuthToken();
  const onLeaveStage = async () => {
    await fetch(`/api/live/removeFromStage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify({
        identity: localParticipant.identity,
      }),
    });
  };

  return (
    <div className={"relative h-full w-full bg-black"}>
      <Grid className={"w-full h-full absolute group"} gap="2" ref={fullScreenVideoEl}>
        {canHost && (
          <div className={"relative"}>
            <Flex className={"absolute w-full h-full"} align="center" justify="center">
              {
                //TODO Add 'src' to Avatar
              }
              <Avatar
                size="9"
                src={localParticipant.attributes.profilePicture === "no-image" ? undefined : localParticipant.attributes.profilePicture}
                fallback={localParticipant.identity[0] ?? "?"}
                radius="full"
              />
            </Flex>
            <video ref={localVideoEl} className={"absolute w-full h-full object-contain bg-transparent"} />
            <div className={"absolute w-full h-full"}>
              <Badge variant="outline" color="gray" className={"absolute bottom-2 right-2"}>
                {localParticipant.identity} (you)
              </Badge>
            </div>
          </div>
        )}
        {!remoteAudioTracks.length &&
          <div key={"fallback"} className={"relative"}>
            <Flex className={"absolute w-full h-full pointer-events-none"} align="center" justify="center">
              <Text size="2" color="yellow" className={"italic"}>No stream live (yet)...</Text>
            </Flex>
            <Theme appearance="light">
              <div className={"transition-opacity ease-in-out duration-200 opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[min(100cqw,177.78cqh)] max-h-full max-w-full aspect-video!"}>
                { /* TL */ }
                <Flex direction="row" align="start" justify="start" gapX="3" className={"absolute top-2 left-2"}>
                  <Button className={"[&:active_.copy-icon]:opacity-0! [&:active_.check-icon]:opacity-100! [&:active_.check-icon]:delay-0 [&:active_.copy-icon]:delay-0"} size="1" variant="soft" disabled={!Boolean(roomName)} onClick={() => copy(`https://heiligemaagden.com/live/watch/${roomName}`)}>
                    {roomState == ConnectionState.Connected ? (
                      <>
                        {roomName}
                        <span className={"grid place-items-center"}>
                          <Copy className={"copy-icon col-start-1 row-start-1 opacity-100 transition-opacity delay-1000 duration-0"} size="16" />
                          <Check className={"check-icon col-start-1 row-start-1 opacity-0! transition-opacity delay-1000 duration-0"} size="16" />
                        </span>
                      </>
                    ) : (
                      "Loading..."
                    )}
                  </Button>
                  {roomName && canHost && (
                    <Flex gap="3">
                      {!screenShareActive ? (
                        <Button size="1" onClick={startScreenShare}>
                          <MonitorUp size="16" /> Start streaming
                        </Button>
                      ) : (
                        <Button size="1" variant="soft" disabled>
                          <MonitorCheck size="16" /> Streaming
                        </Button>
                      )}
                      {/*<MediaDeviceSettings />*/}
                      {roomMetadata.creator_identity !== localParticipant.identity && (
                        <Button size="1" onClick={onLeaveStage}>
                          Leave stage
                        </Button>
                      )}
                    </Flex>
                  )}
                </Flex>
                { /* TR */ }
                <Flex direction="row-reverse" align="start" justify="end" gapX="3" className={"absolute top-2 right-2"}>
                  <PresenceDialog isHost={isHost}>
                    <div className={"relative"}>
                      {showNotification && (
                        <div className={"absolute flex h-3 w-3 -top-1 -right-1"}>
                          <span className={"animate-ping absolute inline-flex h-full w-full rounded-6 bg-accent-11 opacity-75"} />
                          <span className={"relative inline-flex rounded-6 h-3 w-3 bg-accent-11"} />
                        </div>
                      )}
                      <Button size="1" variant="soft" disabled={roomState !== ConnectionState.Connected}>
                        {roomState == ConnectionState.Connected ? <Eye /> : <EyeOff />}
                        {roomState == ConnectionState.Connected ? participants.length : ""}
                      </Button>
                    </div>
                  </PresenceDialog>
                  {roomState == ConnectionState.Connected && (
                    <Badge size="2" radius="small" color="red" variant="solid" className={"uppercase text-white!"}>
                      Live
                    </Badge>
                  )}
                  {roomState == ConnectionState.Connecting && (
                    <Badge size="2" radius="small" color="gray" variant="solid" className={"uppercase text-white!"}>
                      Connecting
                    </Badge>
                  )}
                  {(roomState == ConnectionState.Reconnecting || roomState == ConnectionState.SignalReconnecting) && (
                    <Badge size="2" radius="small" color="gray" variant="solid" className={"uppercase text-white!"}>
                      Reconnecting
                    </Badge>
                  )}
                  {roomState == ConnectionState.Disconnected && (
                    <Badge size="2" radius="small" color="amber" variant="solid" className={"uppercase text-white!"}>
                      Disconnected
                    </Badge>
                  )}
                </Flex>
              </div>
            </Theme>
          </div>
        }
        {remoteVideoTracks.map((t) => (
          <div key={t.participant.identity} className={"relative"}>
            <Flex className={"absolute w-full h-full pointer-events-none"} align="center" justify="center">
              <Avatar
                size="9"
                src={t.participant.identity.endsWith("(via OBS)")
                  ? "/logos/OBS-banner.png"
                  : (t.participant.attributes.profilePicture === "no-image" ? undefined : t.participant.attributes.profilePicture)}
                fallback={t.participant.identity[0] ?? "?"}
                radius="full"
              />
            </Flex>
            <VideoTrack trackRef={t} hidden={!Boolean(playVideo)} className={"absolute w-full h-full bg-transparent pointer-events-none"} />
            { /* Video Player Bar */ }
            {/* <div className={"transition-opacity ease-in-out duration-200 opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 w-max h-full aspect-video!"}> */ }
            <Theme appearance="light">
              <div className={"transition-opacity ease-in-out duration-200 opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[min(100cqw,177.78cqh)] max-h-full max-w-full aspect-video!"}>
                { /* TL */ }
                <Flex direction="row" align="start" justify="start" gapX="3" className={"absolute top-2 left-2"}>
                  <Button className={"[&:active_.copy-icon]:opacity-0! [&:active_.check-icon]:opacity-100! [&:active_.check-icon]:delay-0 [&:active_.copy-icon]:delay-0"} size="1" variant="soft" disabled={!Boolean(roomName)} onClick={() => copy(`https://heiligemaagden.com/live/watch/${roomName}`)}>
                    {roomState == ConnectionState.Connected ? (
                      <>
                        {roomName}
                        <span className={"grid place-items-center"}>
                          <Copy className={"copy-icon col-start-1 row-start-1 opacity-100 transition-opacity delay-1000 duration-0"} size="16" />
                          <Check className={"check-icon col-start-1 row-start-1 opacity-0! transition-opacity delay-1000 duration-0"} size="16" />
                        </span>
                      </>
                    ) : (
                      "Loading..."
                    )}
                  </Button>
                  {roomName && canHost && (
                    <Flex gap="3">
                      {!screenShareActive ? (
                        <Button size="1" onClick={startScreenShare}>
                          <MonitorUp size="16" /> Start streaming
                        </Button>
                      ) : (
                        <Button size="1" variant="soft" disabled>
                          <MonitorCheck size="16" /> Streaming
                        </Button>
                      )}
                      {/*<MediaDeviceSettings />*/}
                      {roomMetadata.creator_identity !== localParticipant.identity && (
                        <Button size="1" onClick={onLeaveStage}>
                          Leave stage
                        </Button>
                      )}
                    </Flex>
                  )}
                </Flex>
                { /* TR */ }
                <Flex direction="row-reverse" align="start" justify="end" gapX="3" className={"absolute top-2 right-2"}>
                  <PresenceDialog isHost={isHost}>
                    <div className={"relative"}>
                      {showNotification && (
                        <div className={"absolute flex h-3 w-3 -top-1 -right-1"}>
                          <span className={"animate-ping absolute inline-flex h-full w-full rounded-6 bg-accent-11 opacity-75"} />
                          <span className={"relative inline-flex rounded-6 h-3 w-3 bg-accent-11"} />
                        </div>
                      )}
                      <Button size="1" variant="soft" disabled={roomState !== ConnectionState.Connected}>
                        {roomState == ConnectionState.Connected ? <Eye /> : <EyeOff />}
                        {roomState == ConnectionState.Connected ? participants.length : ""}
                      </Button>
                    </div>
                  </PresenceDialog>
                  {roomState == ConnectionState.Connected && (
                    <Badge size="2" radius="small" color="red" variant="solid" className={"uppercase text-white!"}>
                      Live
                    </Badge>
                  )}
                  {roomState == ConnectionState.Connecting && (
                    <Badge size="2" radius="small" color="gray" variant="solid" className={"uppercase text-white!"}>
                      Connecting
                    </Badge>
                  )}
                  {(roomState == ConnectionState.Reconnecting || roomState == ConnectionState.SignalReconnecting) && (
                    <Badge size="2" radius="small" color="gray" variant="solid" className={"uppercase text-white!"}>
                      Reconnecting
                    </Badge>
                  )}
                  {roomState == ConnectionState.Disconnected && (
                    <Badge size="2" radius="small" color="amber" variant="solid" className={"uppercase text-white!"}>
                      Disconnected
                    </Badge>
                  )}
                </Flex>
                { /* BL */ }
                <Flex direction="row" align="end" justify="start" gapX="3" className={"absolute bottom-2 left-2"}>
                  <Badge size="2" variant="surface">
                    {t.participant.identity}
                  </Badge>
                  <Button size="1" variant="soft" onClick={() => setPlayVideo(!playVideo)}>
                    {playVideo ?
                      <>
                        <Square size="16" />
                      </> : <>
                        <Play size="16" />
                      </>}
                  </Button>
                </Flex>
                { /* BR */ }
                <Flex direction="row-reverse" align="end" justify="end" gapX="3" className={"absolute bottom-2 right-2"}>
                  <Button size="1" variant="soft" onClick={handleFullscreen}>
                    {playFullscreen ?
                      <>
                        <Minimize size="16" />
                      </> : <>
                        <Maximize size="16" />
                      </>}
                  </Button>
                  <Badge size="2" variant="soft" className={"h-6!"}>
                    <Slider size="1" variant="surface" className={"w-20!"} orientation="horizontal" min={0} max={100}
                      step={5} defaultValue={[100]} value={[playVolume]} disabled={false} radius="large"
                      onValueChange={(values) => {
                        setPlayVolume(values[0]);
                        setPlayMuted(false);
                      }} />
                  </Badge>
                  {canPlayAudio ? <>
                    <Button size="1" variant="soft" onClick={() => setPlayMuted(!playMuted)}>
                      { playMuted
                        ? <VolumeX size="16" />
                        : (playVolume <= 30
                          ? <Volume size="16" />
                          : (playVolume <= 65
                            ? <Volume1 size="16" />
                            : <Volume2 size="16" />
                          )
                        )
                      }
                    </Button>
                  </> : <>
                    <Button size="1" variant="soft" onClick={startAudioProps.onClick}>
                      <VolumeOff size="16" />
                    </Button>
                  </>}
                </Flex>
              </div>
            </Theme>
          </div>
        ))}
      </Grid>
      {remoteAudioTracks.map((t) => (
        <AudioTrack trackRef={t} muted={!Boolean(playVideo) || playMuted} volume={Number(playVolume / 100)} key={t.participant.identity} />
      ))}
      {roomMetadata?.enable_confetti !== false && <ConfettiCanvas />}
    </div>
  );
}
