"use client";

import { Spinner } from "@/app/components/live/Spinner";
import { Badge, Box, Button, Dialog, Flex, RadioCards, Text, TextField } from "@radix-ui/themes";
import type { ActiveRoom } from "@/app/api/live/getActiveRooms/route";
import { Dot, Eye, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface JoinDialogProps {
  children: React.ReactNode;
}
export function JoinDialog({
  children,
}: JoinDialogProps) {
  const router = useRouter();
  const [roomName, setRoomName] = useState<string>("");
  const [roomNameFilter, setRoomNameFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [activeRooms, setActiveRooms] = useState<ActiveRoom[]>([]);

  async function fetchActiveRooms() {
    try {
      const response = await fetch("/api/live/getActiveRooms");
      if (!response.ok) {
        setActiveRooms([]);
        throw new Error(`Failed to fetch active rooms: ${response.status}`);
      }

      setActiveRooms((await response.json()) as ActiveRoom[]);
    } catch (error) {
      setActiveRooms([]);
      console.error("Failed to fetch active rooms:", error);
    }
  }

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (open) {
          setRoomName("");
          void fetchActiveRooms();
        }
      }}
    >
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Join a stream</Dialog.Title>

        {activeRooms.length ? (<>
          <Flex direction="column" gap="3" mt="4">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Filter streams
              </Text>
              <TextField.Root
                type="text"
                placeholder={"Stream-name"}
                value={roomNameFilter}
                onChange={(e) => setRoomNameFilter(e.target.value)}
              >
                <TextField.Slot>
                  <Search />
                </TextField.Slot>
              </TextField.Root>
            </label>
            <Box mt="2">
              <RadioCards.Root columns="1" gap="2" orientation="vertical" defaultValue="" onValueChange={(value) => setRoomName(value)}>
              {activeRooms.filter((ar) => roomNameFilter ? ar.roomName.includes(roomNameFilter) : true).map((ar) =>
                <RadioCards.Item value={ar.roomName} key={ar.roomName}>
                  <Flex direction="row" className="w-full">
                    <Flex direction="column" className="flex-1">
                      <Flex direction="row">
                        <Dot color="var(--red-9)" size="20" className={"animate-pulse align-middle"} />
                        <Text size="2" weight="bold" className={"align-middle"}>{ar.roomName}</Text>
                      </Flex>
                      <Text size="1" className={"flex-1 ml-5"}>{ar.streamerParticipantName}</Text>
                    </Flex>
                    <Badge size="1" className="my-auto">
                      <Eye size="16" />
                      {ar.viewerCount}
                    </Badge>
                  </Flex>
                </RadioCards.Item>)
              }
              </RadioCards.Root>
            </Box>
          </Flex>
        </>) : (<>
          <Flex direction="column" gap="3" mt="4">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Stream name
              </Text>
              <TextField.Root
                type="text"
                placeholder={"Stream-name"}
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </label>
          </Flex>
        </>)}

        <Flex gap="3" mt="6" justify="end">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              onClick={() => setRoomName("")}
            >
              Cancel
            </Button>
          </Dialog.Close>
          <Button
            disabled={!roomName || loading}
            onClick={() => {
              setLoading(true);
              router.push(`/live/watch/${roomName}`);
            }}
          >
            {loading ? (
              <Flex gap="2" align="center">
                <Spinner />
                <Text>Joining...</Text>
              </Flex>
            ) : (
              "Join"
            )}
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}