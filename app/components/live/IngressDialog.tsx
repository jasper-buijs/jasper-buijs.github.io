"use client";

import { AllowParticipationInfo } from "@/app/components/live/AllowParticipationInfo";
import { CreateIngressResponse } from "@/app/components/live/lib/controller";
import { Spinner } from "@/app/components/live/Spinner";
import { Avatar, Button, Code, Dialog, Flex, RadioGroup, Switch, Text, TextField } from "@radix-ui/themes";
import { MonitorPlay } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IngressDialogProps {
  children: React.ReactNode;
}
export function IngressDialog({
  children
}: IngressDialogProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>("");
  const [name, setName] = useState<string>(session?.user?.name || "");
  const [type, setType] = useState<"whip"|"rtmp">("rtmp");
  const [enableChat, setEnableChat] = useState<boolean>(true);
  const [allowParticipation, setAllowParticipation] = useState<boolean>(true);
  const [ingressResponse, setIngressResponse] = useState<CreateIngressResponse>();

  const onCreateIngress = async () => {
    setLoading(true);
    const res = await fetch(`/api/live/createIngress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        room_name: roomName,
        ingress_type: type,
        metadata: {
          creator_identity: name,
          enable_chat: enableChat,
          allow_participation: allowParticipation
        },
      }),
    });
    setIngressResponse(await res.json());
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        {
          ingressResponse ? (
            <>
              <Dialog.Title>Start streaming now</Dialog.Title>
              <Flex direction="column" gap="4" mt="4">
                <Text>
                  In OBS, go to <Code>Settings &gt; Stream</Code> and set the <Code>Service</Code> field{" "}
                  to <Code>{type == "whip" ? "WHIP" : "Custom"}</Code>. Then, copy these values over. When{" "}
                  you&apos;re ready, press &quot;Start Streaming&quot;.
                </Text>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Server URL
                  </Text>
                  <TextField.Root
                    type="text"
                    value={ingressResponse.ingress.url}
                    readOnly
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Stream key
                  </Text>
                  <TextField.Root
                    type="text"
                    value={ingressResponse.ingress.streamKey}
                    readOnly
                  />
                </label>
                <Flex gap="3" mt="6" justify="end">
                  <Button
                    onClick={() =>
                      // TODO This looks wrong!! Won't work, page doesn't really exist.
                      router.push(`/live/watch/${roomName}?at=${ingressResponse.auth_token}&rt=${ingressResponse.connection_details.token}`)
                    }
                  >
                    Join as viewer <MonitorPlay className={"animate-wiggle"} />
                  </Button>
                </Flex>
              </Flex>
            </>
          ) : (
            <>
              <Dialog.Title>Setup ingress endpoint</Dialog.Title>
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
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Ingress type
                  </Text>
                  <RadioGroup.Root>
                    <Flex gap="2" direction="column">
                      <Text as="label" size="2">
                        <Flex gap="2">
                          <RadioGroup.Item
                            value="rtmp"
                            checked={type == "rtmp"}
                            onClick={() => setType("rtmp")}
                          />{" "}
                          RTMP
                        </Flex>
                      </Text>
                      <Text as="label" size="2">
                        <Flex gap="2">
                          <RadioGroup.Item
                            value="whip"
                            checked={type == "whip"}
                            onClick={() => setType("whip")}
                          />{" "}
                          WHIP
                        </Flex>
                      </Text>
                    </Flex>
                  </RadioGroup.Root>
                </label>
                <Flex direction="column" gap="2">
                  <Flex justify="between">
                    <Text as="div" size="2" mb="1" weight="bold">
                      Enable chat
                    </Text>
                    <Switch
                      checked={enableChat}
                      onCheckedChange={(e) => setEnableChat(e)}
                    />
                  </Flex>
                  <Flex justify="between">
                    <Flex align="center" gap="2">
                      <Text as="div" size="2" weight="bold">
                        Viewers can participate
                      </Text>
                      <AllowParticipationInfo />
                    </Flex>
                    <Switch
                      checked={allowParticipation}
                      onCheckedChange={(e) => setAllowParticipation(e)}
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
                      setType("rtmp");
                      setEnableChat(true);
                      setAllowParticipation(true);
                    }}
                  >
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button
                  disabled={!(roomName && type) || loading}
                  onClick={onCreateIngress}
                >
                  {loading ? (
                    <Flex gap="2" align="center">
                      <Spinner />
                      <Text>Creating...</Text>
                    </Flex>
                  ) : (
                    "Create"
                  )}
                </Button>
              </Flex>
            </>
          )
        }
      </Dialog.Content>
    </Dialog.Root>
  );
}