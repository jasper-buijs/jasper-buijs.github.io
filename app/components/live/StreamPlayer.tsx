import { ParticipantMetadata, RoomMetadata } from "@/app/components/live/lib/controller";
import { useAuthToken } from "@/app/components/live/TokenContext";
import { AudioTrack, StartAudio, useDataChannel, useLocalParticipant, useParticipants, useRoomContext, useTracks, VideoTrack } from "@livekit/components-react";
import { Avatar, Badge, Button, Flex, Grid, Text } from "@radix-ui/themes";
import Confetti from "js-confetti";
import { ConnectionState, createLocalScreenTracks, LocalVideoTrack, Track, TrackEvent } from "livekit-client";
import { Copy, Eye, EyeOff, MonitorCheck, MonitorUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PresenceDialog } from "@/app/components/live/PresenceDialog";
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

  return <canvas ref={canvasEl} className={"absolute h-full w-full"} />;
}

export function StreamPlayer({ isHost = false }) {
  const [_, copy] = useCopyToClipboard();

  const [localVideoTrack, setLocalVideoTrack] = useState<LocalVideoTrack>();
  const [screenShareActive, setScreenShareActive] = useState(false);
  const localVideoEl = useRef<HTMLVideoElement>(null);

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
      <Grid className={"w-full h-full absolute"} gap="2">
        {canHost && (
          <div className={"relative"}>
            <Flex className={"absolute w-full h-full"} align="center" justify="center">
              {
                //TODO Add 'src' to Avatar
              }
              <Avatar size="9" fallback={localParticipant.identity[0] ?? "?"} radius="full" />
            </Flex>
            <video ref={localVideoEl} className={"absolute w-full h-full object-contain bg-transparent"} />
            <div className={"absolute w-full h-full"}>
              <Badge variant="outline" color="gray" className={"absolute bottom-2 right-2"}>
                {localParticipant.identity} (you)
              </Badge>
            </div>
          </div>
        )}
        {remoteVideoTracks.map((t) => (
          <div key={t.participant.identity} className={"relative"}>
            <Flex className={"absolute w-full h-full"} align="center" justify="center">
              <Avatar size="9" fallback={t.participant.identity[0] ?? "?"} radius="full" />
            </Flex>
            <VideoTrack trackRef={t} className={"absolute w-full h-full bg-transparent"} />
            <div className={"absolute w-full h-full"}>
              <Badge variant="outline" color="gray" className={"absolute bottom-2 right-2"}>
                {t.participant.identity}
              </Badge>
            </div>
          </div>
        ))}
      </Grid>
      {remoteAudioTracks.map((t) => (
        <AudioTrack trackRef={t} key={t.participant.identity} />
      ))}
      <ConfettiCanvas />
      <StartAudio label={"Click to allow audio playback"} className={"absolute top-0 h-full w-full bg-gray-2/50 text-white"} />
      <div className={"absolute top-0 w-full p-2"}>
        <Flex justify="between" align="end">
          <Flex gap="2" justify="center" align="center">
            <Button size="1" variant="soft" disabled={!Boolean(roomName)} onClick={() => copy(`https://heiligemaagden.com/live/${roomName}`)}>
              {roomState == ConnectionState.Connected ? (
                <>
                  {roomName} <Copy />
                </>
              ) : (
                "Loading..."
              )}
            </Button>
            {roomName && canHost && (
              <Flex gap="2">
                {!screenShareActive ? (
                  <Button size="1" onClick={startScreenShare}>
                    <MonitorUp /> Start streaming
                  </Button>
                ) : (
                  <Button size="1" variant="soft" disabled>
                    <MonitorCheck /> Streaming
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
          <Flex gap="2">
            {roomState == ConnectionState.Connected && (
              <Flex gap="1" align="center">
                <div className={"rounded-6 bg-red-9 w-2 h-2 animate-pulse"} />
                <Text size="1" className={"uppercase text-accent-11"}>
                  Live
                </Text>
              </Flex>
            )}
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
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
