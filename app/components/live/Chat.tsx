"use client";

import { RoomMetadata } from "@/app/components/live/lib/controller";
import { type ReceivedChatMessage, useChat, useLocalParticipant, useRoomInfo } from "@livekit/components-react";
import { Avatar, Box, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { Send } from "lucide-react";
import { useMemo, useState } from "react";

interface ChatMessageProps {
  message: ReceivedChatMessage
}
function ChatMessage({
  message
}: ChatMessageProps) {
  const { localParticipant } = useLocalParticipant();
  
  return (
    <Flex gap="2" align="start" className={"wrap-break-word w-[220px]"}>
      {
        // TODO Avatar add discord image
      }
      <Avatar
        size="1"
        fallback={message.from?.identity[0] ?? "?"}
        radius="full"
      />
      <Flex direction="column">
        <Text
          weight="bold"
          size="1"
          className={
            localParticipant.identity === message.from?.identity
            ? "text-accent-11"
            : "text-gray-11"
          }
        >
          {message.from?.identity ?? "Unknown"}
        </Text>
        <Text size="1">{message.message}</Text>
      </Flex>
    </Flex>
  );
}

export function Chat() {
  const [draft, setDraft] = useState<string>("");
  const { chatMessages, send } = useChat();
  const { metadata } = useRoomInfo();
  const { enable_chat: chatEnabled } = (metadata ? JSON.parse(metadata) : {}) as RoomMetadata;

  // Prevent duplicate messages (unsure why needed but needed)
  const messages = useMemo(() => {
    const timestamps = chatMessages.map((msg) => msg.timestamp);
    const filtered = chatMessages.filter(
      (msg, i) => !timestamps.includes(msg.timestamp, i + 1)
    );

    return filtered;
  }, [chatMessages]);

  const onSend = async () => {
    if (draft.trim().length && send) {
      setDraft("");
      await send(draft);
    }
  };

  return (
    <Flex direction="column" className={"h-full"}>
      <Box className={"text-center p-2 border-b border-accent-5"}>
        <Text size="2" className={"font-mono text-accent-11"}>
          Chat
        </Text>
      </Box>
      <Flex direction="column" justify="end" gap="2" className={"flex-1 h-full px-2 overflow-auto"}>
        {messages.map((msg) => (
          <ChatMessage message={msg} key={msg.timestamp} />
        ))}
      </Flex>
      <Box>
        <Flex gap="2" py="2" px="4" mt="4" className={"border-t border-accent-5"}>
          <Box className={"flex-1"}>
            <TextField.Root
              disabled={!chatEnabled}
              placeholder={chatEnabled ? "Say something..." : "Chat disabled."}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSend();
                }
              }}
            />
          </Box>
          <IconButton onClick={onSend} disabled={!draft.trim().length}>
            <Send />
          </IconButton>
        </Flex>
      </Box>
    </Flex>
  );
}