"use client";

import { BroadcastDialog } from "@/app/components/live/BroadcastDialog";
import { IngressDialog } from "@/app/components/live/IngressDialog";
import { JoinDialog } from "@/app/components/live/JoinDialog";
import { Button, Flex, Text, Theme } from "@radix-ui/themes";

export function HomeActions() {
  return (
    <Flex direction="column" gap="4" justify="center" align="center">
      <JoinDialog>
        <Button variant="solid" size="3" className={"w-full"}>
          Watch someone else&apos;s stream
        </Button>
      </JoinDialog>
      <Text size="1" className={"text-white"}> - OR - </Text>
      <Flex gap="2">
        <BroadcastDialog>
          <Theme appearance="dark">
            <Button disabled variant="soft" size="3">
              <Flex direction="column">
                Stream from browser
                <Text size="1">Coming soon!</Text>
              </Flex>
            </Button>
          </Theme>
        </BroadcastDialog>
        <IngressDialog>
          <Theme appearance="dark">
            <Button variant="soft" size="3">Stream from OBS</Button>
          </Theme>
        </IngressDialog>
      </Flex>
    </Flex>
  );
}