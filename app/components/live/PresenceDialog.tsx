"use client";

import { ParticipantMetadata, RoomMetadata } from "@/app/components/live/lib/controller";
import { useAuthToken } from "@/app/components/live/TokenContext";
import { useLocalParticipant, useParticipants, useRoomContext } from "@livekit/components-react";
import { Avatar, Button, Dialog, Flex, IconButton, Text } from "@radix-ui/themes";
import { Participant } from "livekit-client";
import { User, X } from "lucide-react";

interface ParticipantListItemProps {
  participant: Participant;
  isCurrentUser: boolean;
  isHost?: boolean
}
function ParticipantListItem({
  participant,
  isCurrentUser,
  isHost = false
}: ParticipantListItemProps) {
  const authToken = useAuthToken();
  const participantMetadata = (participant.metadata && JSON.parse(participant.metadata)) as ParticipantMetadata;
  const room = useRoomContext();
  const roomMetadata = (room.metadata && JSON.parse(room.metadata)) as RoomMetadata;

  const onInvite = async () => {
    // TODO optimistic update [not from me??]
    await fetch(`/api/live/inviteToStage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify({
        identity: participant.identity,
      }),
    });
  };

  // TODO optimistic update [not from me??]
  const onRaiseHand = async () => {
    await fetch(`/api/live/raiseHand`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
    });
  };

  // TODO optimistic update [not from me??]
  const onCancel = async () => {
    await fetch(`/api/live/removeFromStage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify({
        identity: participant.identity,
      }),
    });
  };

  function HostActions() {
    if (!isCurrentUser) {
      if (participantMetadata.invited_to_stage && participantMetadata.hand_raised) {
        return (
          <Button size="1" variant="outline" onClick={onCancel}>
            Remove
          </Button>
        );
      } else if (participantMetadata.hand_raised) {
        return (
          <Flex gap="2">
            <Button size="1" onClick={onInvite}>
              Accept
            </Button>
            <Button size="1" variant="outline" onClick={onCancel}>
              Reject
            </Button>
          </Flex>
        );
      } else if (participantMetadata.invited_to_stage) {
        return (
          <Button size="1" variant="outline" disabled>
            Pending...
          </Button>
        );
      } else if (!participantMetadata.invited_to_stage) {
        return (
          <Button size="1" onClick={onInvite}>
            Invite to stream
          </Button>
        );
      }
    }
  }

  function ViewerActions() {
    if (isCurrentUser) {
      if (participantMetadata.invited_to_stage && participantMetadata.hand_raised) {
        return (
          <Button size="1" onClick={onCancel}>
            Stop stream
          </Button>
        );
      } else if (participantMetadata.invited_to_stage && !participantMetadata.hand_raised) {
        return (
          <Flex gap="2">
            <Button size="1" onClick={onRaiseHand}>
              Accept
            </Button>
            <Button size="1" variant="outline" onClick={onCancel}>
              Reject
            </Button>
          </Flex>
        );
      } else if (!participantMetadata.invited_to_stage && participantMetadata.hand_raised) {
        return (
          <Button size="1" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        );
      } else if (!participantMetadata.invited_to_stage && !participantMetadata.hand_raised) {
        return (
          <Button size="1" onClick={onRaiseHand}>
            Raise hand
          </Button>
        );
      }
    }
  }

  return (
    <Flex key={participant.sid} justify="between">
      <Flex align="center" gap="2">
        <Avatar
          size="1"
          fallback={participant.identity[0] ?? <User />}
          radius="full"
        />
        <Text className={isCurrentUser ? "text-accent-11" : ""}>
          {participant.identity}
          {isCurrentUser && " (you)"}
        </Text>
      </Flex>
      {isHost && roomMetadata.allow_participation ? (
        <HostActions />
      ) : (
        <ViewerActions />
      )}
    </Flex>
  );
}

interface PresenceDialogProps {
  children: React.ReactNode;
  isHost?: boolean;
}
export function PresenceDialog({
  children,
  isHost = false
}: PresenceDialogProps) {
  const { localParticipant } = useLocalParticipant();
  const participants = useParticipants();
  const hosts = participants.filter(
    (participant) => participant.permissions?.canPublish ?? false
  );
  const viewers = participants.filter(
    // @ts-ignore
    (participant) => !participant.permissions?.canPublish ?? true
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>
          <Flex justify="between" align="center">
            Who&apos;s here
            <Dialog.Close>
              <IconButton variant="ghost" color="gray">
                <X />
              </IconButton>
            </Dialog.Close>
          </Flex>
        </Dialog.Title>
        <Flex direction="column" gap="4" mt="4">
          {hosts.length > 0 && (
            <Flex direction="column" gap="2">
              <Text size="1" className={"uppercase font-bold text-gray-11"}>
                {hosts.length > 1 ? "Co-Hosts" : "Hosts"}
              </Text>
              {hosts.map((participant) => (
                <ParticipantListItem
                  key={participant.identity}
                  participant={participant}
                  isCurrentUser={participant.identity === localParticipant.identity}
                  isHost={isHost}
                />
              ))}
            </Flex>
          )}
          {viewers.length > 0 && (
            <Flex direction="column" gap="2">
              <Text size="1" className={"uppercase font-bold text-gray-11"}>
                Viewers
              </Text>
              {viewers.map((participant) => (
                <ParticipantListItem
                  key={participant.identity}
                  participant={participant}
                  isCurrentUser={participant.identity === localParticipant.identity}
                  isHost={isHost}
                />
              ))}
            </Flex>
          )}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}