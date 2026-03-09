"use client";

import { useChat, useDataChannel } from "@livekit/components-react";
import { Button, Flex, Tooltip } from "@radix-ui/themes";
import { DataPacket_Kind } from "livekit-server-sdk";
import { useState } from "react";

export function ReactionBar() {
  const [encoder] = useState(() => new TextEncoder());
  const { send } = useDataChannel("reactions");
  const { send: sendChat } = useChat();

  const onSend = (emoji: string) => {
    send(encoder.encode(emoji), { reliable: false });
    if (sendChat) sendChat(emoji);
  };

  return (
    <Flex
      gap="2"
      justify="center"
      align="center"
      className="border-t border-accent-5 bg-accent-3 h-[100px] text-center"
    >
      <Tooltip content={"Fire"} delayDuration={0}>
        <Button size="4" variant="outline" onClick={() => onSend("🔥")}>🔥</Button>
      </Tooltip>
      <Tooltip content={"Applause"} delayDuration={0}>
        <Button size="4" variant="outline" onClick={() => onSend("👏")}>👏</Button>
      </Tooltip>
      <Tooltip content={"Laughing"} delayDuration={0}>
        <Button size="4" variant="outline" onClick={() => onSend("🤣")}>🤣</Button>
      </Tooltip>
      <Tooltip content={"Love"} delayDuration={0}>
        <Button size="4" variant="outline" onClick={() => onSend("💚")}>💚</Button>
      </Tooltip>
      <Tooltip content={"Confetti"} delayDuration={0}>
        <Button size="4" variant="outline" onClick={() => onSend("🎉")}>🎉</Button>
      </Tooltip>
    </Flex>
  );
}