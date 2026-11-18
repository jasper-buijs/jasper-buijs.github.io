"use client";

import { Chat } from "@/app/components/live/Chat";
import { ReactionBar } from "@/app/components/live/ReactionBar";
import { StreamPlayer } from "@/app/components/live/StreamPlayer";
import { TokenContext } from "@/app/components/live/TokenContext";
import { LiveKitRoom } from "@livekit/components-react";
import { Box, Flex } from "@radix-ui/themes";

interface PageProps {
  authToken: string;
  roomToken: string;
  serverUrl: string;
}

export default function HostPageClt({
  authToken,
  roomToken,
  serverUrl
}: PageProps) {
  return (
    <TokenContext.Provider value={authToken}>
      <LiveKitRoom serverUrl={serverUrl} token={roomToken}>
        <Flex className={"w-full h-screen"}>
          {
            // TODO Change size of this? maybe?
          }
          <Flex direction="column" className={"flex-1"}>
            <Box className={"flex-1 bg-gray-1"}>
              <StreamPlayer isHost />
            </Box>
              <ReactionBar />
          </Flex>
          <Box className={"bg-accent-2 min-w-[280px] border-l border-accent-5 hidden sm:block"}>
            <Chat />
          </Box>
        </Flex>
      </LiveKitRoom>
    </TokenContext.Provider>
  );
};