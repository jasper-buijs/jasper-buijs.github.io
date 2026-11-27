"use client";

import { Exam } from "@/app/api/exams/getUserExams/route";
import { AddExamDialog } from "@/app/components/mobile/exams/AddExamDialog";
import { authClient } from "@/auth-client";
import { Button, Dialog, Flex, IconButton, Link, Popover, Table, Text } from "@radix-ui/themes";
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
      <Dialog.Content style={{ maxWidth: 350 }}>
        <Dialog.Title>Your Exams</Dialog.Title>
        <Dialog.Description>Add or delete exams here.</Dialog.Description>

        <Table.Root layout="fixed" variant="surface" className={"mt-6 w-full max-h-[50vh] overflow-y-scroll"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className={"min-w-0 overflow-hidden text-ellipsis"}>Exam</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className={"w-20"} align="right">Options</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              examList.map((exam) => {
                return (
                  <Table.Row key={exam.id}>
                    <Table.Cell>
                      <Flex className={"h-full min-w-0 overflow-hidden"}>
                        <Popover.Root>
                          <Popover.Trigger>
                            <Link weight="bold" className={"h-min w-full my-auto overflow-hidden text-nowrap text-ellipsis underline"}>{exam.name}</Link>
                          </Popover.Trigger>
                          <Popover.Content className={"max-w-[96vw]"}>
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
                              {
                                exam.kulCourseCode &&
                                <Image className={"w-32 h-auto mt-2"} src={"/logos/exams/kul.png"} alt={"KULeuven"} width="400" height="143" />
                              }
                              {
                                exam.vubCourseCode &&
                                <Image className={"w-32 h-auto mt-2"} src={"/logos/exams/vub.png"} alt={"VUB"} width="954" height="425" />
                              }
                            </Flex>
                          </Popover.Content>
                        </Popover.Root>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell align="right">
                      <IconButton size="3" onClick={() => deleteExam(exam.id)} color="red" variant="soft">
                        <Trash size="16" />
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

        <Flex direction="row" className={"mt-6 gap-3 w-full text-end"} justify="center">
          <Dialog.Close>
            <Button color="gray" variant="soft" size="3">Close</Button>
          </Dialog.Close>
          <AddExamDialog updateCallback={fetchExams}>
            <Button color={"green"} size="3">Add exam</Button>
          </AddExamDialog>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  </>);
}