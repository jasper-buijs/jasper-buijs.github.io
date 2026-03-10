"use client";

import { BroadcastDialog } from "@/app/components/live/BroadcastDialog";
import { IngressDialog } from "@/app/components/live/IngressDialog";
import { JoinDialog } from "@/app/components/live/JoinDialog";
import { Button, Flex, Text } from "@radix-ui/themes";

export function HomeActions() {
  return (
    <Flex direction="column" gap="4" justify="center" align="center">
      <JoinDialog>
        <Button variant="solid" size="3" radius="small" className={"w-full"}>
          Watch someone else&apos;s stream
        </Button>
      </JoinDialog>
      <Text size="1" className={"text-white"}> - OR - </Text>
      <Flex gap="2">
        <BroadcastDialog>
          <Button variant="soft" size="3" radius="small" style={{ color: "black" }}>Stream from browser</Button>
        </BroadcastDialog>
        <IngressDialog>
          <Button variant="soft" size="3" radius="small" style={{ color: "black" }}>Stream from OBS</Button>
        </IngressDialog>
      </Flex>
    </Flex>
  );
}