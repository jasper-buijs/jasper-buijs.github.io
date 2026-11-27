"use client"

import { authClient } from "@/auth-client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

enum Access {
  PENDING,
  ALLOWED,
  SIGNED_OUT,
  NOT_MEMBER,
  ERROR,
}

interface CheckSignInDialogProps {
  children: React.ReactNode,
  requireGuildMembership: boolean
}
export function CheckSignInDialog({
  children,
  requireGuildMembership = false,
}: CheckSignInDialogProps) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [access, setAccess] = useState<Access>(Access.PENDING);

  useEffect(() => {
    if (isPending) return;

    if (!session?.user.id) {
      setAccess(Access.SIGNED_OUT);
      return;
    }

    if (!requireGuildMembership) {
      setAccess(Access.ALLOWED);
      return;
    }

    fetch(`/api/checkGuild`)
      .then((res) => {
        if (res.status == 200) setAccess(Access.ALLOWED);
        else if (res.status == 401) setAccess(Access.NOT_MEMBER);
        else setAccess(Access.ERROR);
      })
      .catch(() => {
        setAccess(Access.ERROR);
      });
  }, [isPending, session, requireGuildMembership]);

  if (access == Access.ALLOWED) return <>{children}</>;

  if (access == Access.PENDING) {
    return (
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Content>
          <AlertDialog.Title>Loading...</AlertDialog.Title>
          <AlertDialog.Description>
            Checking your account permissions. Please wait.
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Root>
    );
  }

  if (access == Access.SIGNED_OUT) {
    return (
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Content>
          <AlertDialog.Title>Sign in!</AlertDialog.Title>
          <AlertDialog.Description>
            You must sign in to view this page.
          </AlertDialog.Description>
          <Flex direction="row" mt="6" gap="3" justify="center">
            <AlertDialog.Cancel>
              <Button size="3" onClick={() => router.back()} color="gray" variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                onClick={() => authClient.signIn.social({ provider: "discord" })}
                variant="solid"
                color="green"
                size="3"
              >
                Sign in
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    );
  }

  if (access == Access.NOT_MEMBER) {
    return (
      <AlertDialog.Root defaultOpen>
        <AlertDialog.Content>
          <AlertDialog.Title>Not authorized</AlertDialog.Title>
          <AlertDialog.Description>
            This page is only for members of our Discord.
            If you just joined, try reloading this page.
          </AlertDialog.Description>
          <Flex direction="row" mt="6" gap="3" justify="center">
            <AlertDialog.Cancel>
              <Button size="3" onClick={() => router.back()} color="gray" variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    );
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Content>
        <AlertDialog.Title>Error :(</AlertDialog.Title>
        <AlertDialog.Description>
          Something went wrong.
          Try signing out and back in, reload the page or DM me.
        </AlertDialog.Description>
        <Flex direction="row" mt="6" gap="3" justify="center">
          <AlertDialog.Cancel>
            <Button size="3" onClick={() => router.back()} color="gray" variant="soft">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button size="3" onClick={() => authClient.signOut()} variant="solid" color="red">Sign Out</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );

  // Ask api about guildmembership, should be async?, how to block page.
}