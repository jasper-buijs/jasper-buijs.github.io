"use client";

import { Exam } from "@/app/api/exams/getUserExams/route";
import { AddExamDialog } from "@/app/components/exams/AddExamDialog";
import { authClient } from "@/auth-client";
import { Box, Button, Dialog, Flex, HoverCard, IconButton, Link, Table, Text } from "@radix-ui/themes";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface GetUserExamsDialogProps {
  children: React.ReactNode,
  updateCallback?: () => Promise<void>,
}
export function GetUserExamsDialog({
  children,
  updateCallback
}: GetUserExamsDialogProps) {
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState<boolean>(false);
  const [examList, setExamList] = useState<Exam[]>([]);

  const fetchExams = useCallback(() => {
    async function fetchUserExams() {
      if (!session) return;
      const response = await fetch("/api/exams/getUserExams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: session.user.id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch exams: ${response.status}`);
      }

      const data: { exams: Exam[] } = await response.json();
      setExamList(data.exams.map((exam) => ({
        ...exam,
        startDate: new Date(exam.startDate),
      })));
    }

    void fetchUserExams();
  }, [session?.user]);

  useEffect(fetchExams, [open, session?.user, fetchExams]);

  async function deleteExam(examId: number) {
    if (!session) return;
    const response = await fetch(`/api/exams/deleteUserExam`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: examId,
        user_id: session.user.id
      }),
    });

    if (response.ok) setExamList(examList.filter((exam) => exam.id !== examId));
  }

  return (<>
    <Dialog.Root open={open} onOpenChange={(o) => {
      setOpen(o);
      if (!o && updateCallback) void updateCallback();
    }}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Your Exams</Dialog.Title>
        <Dialog.Description>You can add or delete exams from here.</Dialog.Description>

        <Table.Root variant="surface" className={"mt-6"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell width="80%">Exam</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="20%" align="right">Options</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              examList.map((exam) => {
                return (
                  <Table.Row key={exam.id}>
                    <Table.Cell>
                      <Flex className={"h-full"}>
                        <HoverCard.Root>
                          <HoverCard.Trigger>
                            <Link weight="bold" className={"h-min my-auto text-nowrap text-ellipsis underline decoration-dashed"}>{exam.name}</Link>
                          </HoverCard.Trigger>
                          <HoverCard.Content>
                            <Flex direction="row">
                              <Flex direction="column">
                                <Text as="div" weight="medium">
                                  {
                                    exam.kulCourseCode || exam.vubCourseCode
                                    ? `${exam.name} (${exam.kulCourseCode || exam.vubCourseCode})`
                                    : exam.name
                                  }
                                </Text>
                                <Text as="div" size="2">
                                  {
                                    exam.startDate.toLocaleString(undefined, {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "short",
                                    hour: "numeric",
                                    minute: "2-digit",
                                    })
                                  }
                                </Text>
                              </Flex>
                              {
                                exam.kulCourseCode &&
                                <Image className={"h-6 w-auto my-auto ml-4"} src={"/logos/exams/kul.png"} alt={"KULeuven"} width="400" height="143" />
                              }
                              {
                                exam.vubCourseCode &&
                                <Image className={"h-6 w-auto my-auto ml-4"} src={"/logos/exams/vub.png"} alt={"VUB"} width="954" height="425" />
                              }
                            </Flex>
                          </HoverCard.Content>
                        </HoverCard.Root>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell align="right">
                      <IconButton onClick={() => deleteExam(exam.id)} color="red" variant="soft">
                        <Trash size="12" />
                      </IconButton>
                    </Table.Cell>
                  </Table.Row>
                );
              })

              /*<Table.Row>
              <Table.Cell>Arts in de Samenleving</Table.Cell>
              <Table.Cell align="right">
                <IconButton color="red" variant="soft">
                  <Trash size="12" />
                </IconButton>
              </Table.Cell>
            </Table.Row>*/}

          </Table.Body>
        </Table.Root>

        <Box className={"mt-2 w-full text-end"}>
          <AddExamDialog updateCallback={fetchExams}>
            <Button color={"green"}>Add exam</Button>
          </AddExamDialog>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  </>);
}