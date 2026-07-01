"use client";

import { Chat } from "@/app/components/live/Chat";
import { JoinStreamResponse } from "@/app/components/live/lib/controller";
import { cn } from "@/app/components/live/lib/utils";
import { ReactionBar } from "@/app/components/live/ReactionBar";
import { Spinner } from "@/app/components/live/Spinner";
import { StreamPlayer } from "@/app/components/live/StreamPlayer";
import { TokenContext } from "@/app/components/live/TokenContext";
import { LiveKitRoom } from "@livekit/components-react";
import { Avatar, Box, Button, Card, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { MonitorPlay } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface DesktopPageProps {
  roomName: string;
  serverUrl: string;
}
export default  function DesktopPage({
  roomName,
  serverUrl,
}: DesktopPageProps) {
  const { data: session } = useSession();

  const [name, setName] = useState<string>(session?.user?.name || ""); // TODO set name from Discord.
  const [authToken, setAuthToken] = useState<string>("");
  const [roomToken, setRoomToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      <Flex align="center" justify="center" className={"h-full"}>
        <Card className={"p-3 w-[380px]"}>
          <Heading size="4" mb="4">
            Entering {decodeURI(roomName)}
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
          <Flex gap="3" mt="6" justify="end">
            <Button disabled={!name || loading} onClick={onJoin}>
              {loading ? (
                <Flex gap="2" align="center">
                  <Spinner />
                  <Text>Joining...</Text>
                </Flex>
              ) : (
                <>
                  Join as viewer{" "}
                  <MonitorPlay className={cn(name && "animate-wiggle")} />
                </>
              )}
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }

  return (
    <TokenContext.Provider value={authToken}>
      <LiveKitRoom serverUrl={serverUrl} token={roomToken}>
        <Flex className={"w-full h-full"}>
          <Flex direction="column" className={"flex-1"}>
            <Box className={"flex-1 bg-gray-1"}>
              <StreamPlayer />
            </Box>
            <ReactionBar />
          </Flex>
          <Box className={"bg-accent-2 min-w-[280px] border-l border-accent-5"}>
            <Chat />
          </Box>
        </Flex>
      </LiveKitRoom>
    </TokenContext.Provider>
  );
}