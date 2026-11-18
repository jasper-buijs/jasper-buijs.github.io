import { Chat } from "@/app/components/mobile/live/Chat";
import { JoinStreamResponse } from "@/app/components/live/lib/controller";
import { cn } from "@/app/components/live/lib/utils";
import { ReactionBar } from "@/app/components/mobile/live/ReactionBar";
import { Spinner } from "@/app/components/live/Spinner";
import { StreamPlayer } from "@/app/components/mobile/live/StreamPlayer";
import { TokenContext } from "@/app/components/live/TokenContext";
// import Alert from "@/app/components/mobile/Alert";
import { authClient } from "@/auth-client";
import { LiveKitRoom } from "@livekit/components-react";
import { Avatar, Box, Button, Card, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { MonitorPlay } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MobilePageProps {
  roomName: string;
  serverUrl: string;
}
export default function MobilePage({
  roomName,
  serverUrl,
}: MobilePageProps) {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [name, setName] = useState<string>(session?.user?.name || "");
  const [authToken, setAuthToken] = useState<string>("");
  const [roomToken, setRoomToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session && session.user) setName(session.user.name);
  }, [session]);

  const onJoin = async () => {
    setLoading(true);
    const res = await fetch(`/api/live/joinStream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        room_name: roomName,
        identity: name,
      }),
    });
    const {
      auth_token,
      connection_details: { token },
    } = (await res.json()) as JoinStreamResponse;

    setAuthToken(auth_token);
    setRoomToken(token);
  };

  if (!authToken || !roomToken) {
    return (
      <Flex align="center" justify="center" className={"absolute top-0 bottom-0 left-0 right-0"}>
        <Card className={"p-3 w-95"}>
          <Heading size="4" mb="4">
            Joining {decodeURI(roomName)}
          </Heading>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Entering as
            </Text>
            <TextField.Root
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={name == session?.user?.name}
            >
              <TextField.Slot>
                <Avatar
                  size="1"
                  src={session?.user?.image || undefined}
                  fallback={name ? name[0] : "?"}
                  radius="full"
                />
              </TextField.Slot>
            </TextField.Root>
          </label>
          <Flex gap="3" mt="6" justify="center">
            <Button color="gray" size="3" variant="soft" onClick={() => router.push("/live")}>
              Cancel
            </Button>
            <Button disabled={!name || loading} size="3" onClick={onJoin}>
              {loading ? (
                <Flex gap="2" align="center">
                  <Spinner />
                  <Text>Joining...</Text>
                </Flex>
              ) : (
                <>
                  Join as viewer{" "}
                  <MonitorPlay className={cn(name)} />
                </>
              )}
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }

  return (
    <>
      <TokenContext.Provider value={authToken}>
        <LiveKitRoom serverUrl={serverUrl} token={roomToken}>
          <Flex className={"w-screen h-screen"}>
            <Flex direction="column" className={"flex-1"}>
              <Box className={"w-screen aspect-video bg-gray-1"}>
                <StreamPlayer />
              </Box>
              <ReactionBar />
              <Box className={"bg-accent-2 w-screen flex-1 border-l border-accent-5"}>
                <Chat />
              </Box>
            </Flex>
          </Flex>
        </LiveKitRoom>
      </TokenContext.Provider>
    </>
  );
}