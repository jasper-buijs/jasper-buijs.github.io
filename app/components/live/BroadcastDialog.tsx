"use client";

import { CreateStreamResponse } from "@/app/components/live/lib/controller";
import { Spinner } from "@/app/components/live/Spinner";
import { Avatar, Button, Dialog, Flex, Switch, Text, TextField } from "@radix-ui/themes";
// import { useSession } from "next-auth/react"; // next-auth -> better-auth
import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BroadcastDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const { data: session } = useSession(); // next-auth -> better-auth
  const { data: session } = authClient.useSession();

  const [ loading, setLoading ] = useState<boolean>(false);
  const [ roomName, setRoomName ] = useState<string>("");
  const [ name, setName ] = useState<string>(session?.user?.name || "");
  const [ enableChat, setEnableChat ] = useState<boolean>(true);
  const [enableConfetti, setEnableConfetti] = useState<boolean>(true);

  useEffect(() => {
    if (session && session.user) setName(session.user.name);
  }, [session]);

  const onGoLive = async () => {
    setLoading(true);
    const res = await fetch("/api/live/createStream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        room_name: roomName,
        metadata: {
          creator_identity: name,
          enable_chat: enableChat,
          allow_participation: false,
          enable_confetti: enableConfetti,
        },
      }),
    });
    const {
      auth_token,
      connection_details: { token },
    } = (await res.json()) as CreateStreamResponse;
    router.push(`/live/host?at=${auth_token}&rt=${token}`);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{maxWidth: 450}}>
        <Dialog.Title>Create new stream</Dialog.Title>
        <Flex direction="column" gap="4" mt="4">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Stream name
            </Text>
            <TextField.Root
              type="text"
              placeholder="My super cool stream"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Streaming as
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

          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Text as="div" size="2" mb="1" weight="medium">
                Enable chat
              </Text>
              <Switch
                checked={enableChat}
                onCheckedChange={(e) => setEnableChat(e)}
                radius="large"
              />
            </Flex>
            <Flex justify="between">
              <Flex align="center" gap="2">
                <Text as="div" size="2" weight="medium">
                  Enable confetti for everyone
                </Text>
              </Flex>
              <Switch
                checked={enableConfetti}
                onCheckedChange={setEnableConfetti}
                radius="large"
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex gap="3" mt="6" justify="end">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              onClick={() => {
                setRoomName("");
                setEnableChat(true);
                setEnableConfetti(true);
              }}
            >
              Cancel
            </Button>
          </Dialog.Close>

          <Button disabled={!(roomName && name) || loading} onClick={onGoLive}>
            {loading ? (
              <Flex gap="2" align="center">
                <Spinner />
                <Text>Creating stream...</Text>
              </Flex>
            ) : (
              "Create stream"
            )}
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}