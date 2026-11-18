"use client";

import { BroadcastDialog } from "@/app/components/live/BroadcastDialog";
import { JoinDialog } from "@/app/components/mobile/live/JoinDialog";
import { Button, Flex, Text, Theme } from "@radix-ui/themes";

export function HomeActions() {
  return (
    <Flex direction="column" gap="4" justify="center" align="center" className={"w-full"}>
      <JoinDialog>
        <Button variant="solid" size="3" className={"w-[80%]"}>
          Watch someone&apos;s stream
        </Button>
      </JoinDialog>
      <Text size="1" className={"text-white"}> - OR - </Text>
      <BroadcastDialog>
        <Theme asChild appearance="dark">
          <Button disabled variant="soft" size="3" className={"w-[80%]"}>
            <Flex direction="column">
              Stream from browser
              <Text size="1">Coming soon!</Text>
            </Flex>
          </Button>
        </Theme>
      </BroadcastDialog>
      <Theme asChild appearance="dark">
        <Button disabled variant="soft" size="3" className={"w-[80%]"}>
          <Flex direction="column">
            Stream from OBS
            <Text size="1">Desktop only!</Text>
          </Flex>
        </Button>
      </Theme>
    </Flex>
  );
}