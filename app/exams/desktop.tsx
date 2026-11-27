"use client";

import { Exam } from "@/app/api/exams/getAllExams/route";
import { CheckSignInDialog } from "@/app/components/CheckSignInDialog";
import { GetUserExamsDialog } from "@/app/components/exams/GetUserExamsDialog";
import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import { authClient } from "@/auth-client";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  IconButton,
  Popover,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function DesktopPage() {
  const { data: session } = authClient.useSession();
  const [month, setMonth] = useState<1 | 2>(1);
  const [loadingCal, setLoadingCal] = useState<boolean>(true);
  const [examList, setExamList] = useState<Exam[]>([]);
  const [month1Name, setMonth1Name] = useState<string>("");
  const [month1Length, setMonth1Length] = useState<number>(0);
  const [month1FirstDay, setMonth1FirstDay] = useState<number>(0);
  const [month2Name, setMonth2Name] = useState<string>("");
  const [month2Length, setMonth2Length] = useState<number>(0);
  const [month2FirstDay, setMonth2FirstDay] = useState<number>(0);
  const [startFilterDate, setStartFilterDate] = useState<number>(0);
  const [endFilterDate, setEndFilterDate] = useState<number>(0);

  const fetchExams = useCallback(async (s: number, e: number) => {
    console.log(s, e)
    const response = await fetch(`/api/exams/getAllExams`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ startFilterDate: s, endFilterDate: e }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch exams: ${response.status}`);
    }

    const data: { exams: Exam[] } = await response.json();
    setExamList(data.exams.map((exam) => ({
      ...exam,
      startDate: new Date(exam.startDate),
    })));
  }, []);

  useEffect(() => {
    let date = new Date();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    if (currentMonth == 0) {
      // Jan -> Dec & Jan
      setMonth1Length(31);
      date.setFullYear(currentYear - 1, 11, 1);
      setMonth1FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth1Name(date.toLocaleString(undefined, {month: "long"}));
      setStartFilterDate(date.getTime());
      setMonth2Length(31);
      date.setFullYear(currentYear, 0, 1);
      setMonth2FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth2Name(date.toLocaleString(undefined, {month: "long"}));
      date.setDate(31);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else if (currentMonth < 6) {
      // Feb-Jun -> May & Jun
      setMonth1Length(31);
      date.setFullYear(currentYear, 4, 1);
      setMonth1FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth1Name(date.toLocaleString(undefined, {month: "long"}));
      setStartFilterDate(date.getTime());
      setMonth2Length(30);
      date.setFullYear(currentYear, 5, 1);
      setMonth2FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth2Name(date.toLocaleString(undefined, {month: "long"}));
      date.setDate(30);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else if (currentMonth < 8 || (currentMonth == 8 && currentDay < 20)) {
      // Jul-Sep 20 -> Aug & Sep
      setMonth1Length(31);
      date.setFullYear(currentYear, 7, 1);
      setMonth1FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth1Name(date.toLocaleString(undefined, {month: "long"}));
      setStartFilterDate(date.getTime());
      setMonth2Length(30);
      date.setFullYear(currentYear, 8, 1);
      setMonth2FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth2Name(date.toLocaleString(undefined, {month: "long"}));
      date.setDate(30);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else {
      // Sep 20-Dec -> Dec & Jan
      setMonth1Length(31);
      date.setFullYear(currentYear, 11, 1);
      setMonth1FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth1Name(date.toLocaleString(undefined, {month: "long"}));
      setStartFilterDate(date.getTime());
      setMonth2Length(31);
      date.setFullYear(currentYear + 1, 0, 1);
      setMonth2FirstDay(date.getDay() == 0 ? 7 : date.getDay());
      setMonth2Name(date.toLocaleString(undefined, {month: "long"}));
      date.setDate(31);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    }
  }, []);

  useEffect(() => {
    if (!startFilterDate || !endFilterDate) return;
    void fetchExams(startFilterDate, endFilterDate);
  }, [startFilterDate, endFilterDate, fetchExams]);

  return(
    <>
      <NavBar activePage={"exams"} />

      <CheckSignInDialog requireGuildMembership>
        <Box className={"absolute left-12 right-12 top-20 bottom-20 bg-background p-10"}>
          <Flex direction="column" gap="4" className="h-full">
            <Flex direction="row">
              <Text as="div" size="4" weight="medium" className={"flex-1 my-auto"}>{month == 1 ? month1Name : month2Name}</Text>
              <GetUserExamsDialog updateCallback={() => fetchExams(startFilterDate, endFilterDate)}>
                <Button className={"mr-4"}>Manage your exams</Button>
              </GetUserExamsDialog>
              <IconButton
                color="gray" variant="soft" disabled={month == 1} onClick={() => setMonth(1)}
                className={"rounded-e-none border-r border-gray-11 text-gray-11 disabled:text-gray-8! disabled:border-gray-8!"}
              >
                <ArrowLeft />
              </IconButton>
              <IconButton
                color="gray" variant="soft" disabled={month == 2} onClick={() => setMonth(2)}
                className={"rounded-s-none border-l border-gray-11 text-gray-11 disabled:text-gray-8! disabled:border-gray-8!"}
              >
                <ArrowRight />
              </IconButton>
            </Flex>

            <Skeleton loading={loadingCal}>
              <Grid
                columns="7"
                gap="1"
                className={"min-h-0 min-w-0 flex-1"}
                style={{ gridAutoRows: "minmax(0, 1fr)" }}
              >
                {
                  month == 1 &&
                  <>
                    {[...Array(Math.max(0, month1FirstDay - 1))].map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {[...Array(month1Length)].map((_, i) => {
                      const cardDate = new Date(startFilterDate);
                      cardDate.setDate(i + 1);
                      return (
                        <Card key={i + 1} className="h-full min-h-0 min-w-0 overflow-hidden pb-0! pt-2! pl-3!">
                          <Flex direction="column" className="h-full min-h-0">
                            <Text color={cardDate.toDateString() == new Date().toDateString() ? "ruby" : "gray"} size="3" weight="medium">{i + 1}</Text>
                            <Box className="min-h-0 w-full flex-1 overflow-y-auto">
                            {
                              examList
                                .filter((exam) =>
                                  exam.startDate.getFullYear() === cardDate.getFullYear() &&
                                  exam.startDate.getMonth() === cardDate.getMonth() &&
                                  exam.startDate.getDate() === cardDate.getDate()
                                )
                                .map((exam) => (
                                  <Popover.Root key={exam.id}>
                                    <Popover.Trigger>
                                      <button className="flex w-full min-w-0 items-center text-left leading-none mb-1">
                                        <Badge
                                          className={"max-w-full min-w-0 overflow-hidden pt-0! pb-0! pl-0!"}
                                          size="1"
                                          color={
                                            exam.users.some((user) => user.userId == session?.user.id)
                                              ? "yellow"
                                              : "gray"
                                          }
                                          radius="full"
                                        >
                                          {exam.users.map((user, i) => (
                                            <Avatar
                                              key={user.userId}
                                              className={i != 0 ? "-translate-x-2 -mr-2" : ""}
                                              size="1"
                                              radius="full"
                                              src={user.userImg || undefined}
                                              fallback={user.userName[0]}
                                              color={ user.userId == session?.user.id ? "yellow" : "gray"}
                                            />
                                          ))}
                                          <span className="min-w-0 flex-1 truncate">{exam.name}</span>
                                        </Badge>
                                      </button>
                                    </Popover.Trigger>
                                    <Popover.Content>
                                      <Flex direction="column">
                                        <Text as="div" weight="medium" key={exam.id}>
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
                                        <Flex direction="row" gap="2" className={"mt-1"}>
                                          {
                                            exam.users.map((user) => (
                                              <Badge key={user.userId} className={"pt-0! pb-0! pl-0!"} size="1" color={user.userId == session?.user.id ? "yellow" : "gray"} radius="full">
                                                <Avatar size="1" radius="full" src={user.userImg || undefined} fallback={user.userName[0]} />
                                                {user.userName}
                                              </Badge>
                                            ))
                                          }
                                        </Flex>
                                      </Flex>
                                    </Popover.Content>
                                  </Popover.Root>
                                ))
                            }
                            </Box>
                          </Flex>
                        </Card>
                      );
                    })}
                  </>
                }
                {
                  month == 2 &&
                  <>
                    {[...Array(Math.max(0, month2FirstDay - 1))].map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {[...Array(month2Length)].map((_, i) => {
                      const cardDate = new Date(startFilterDate);
                      cardDate.setMonth(cardDate.getMonth() + 1, i + 1);
                      return (
                        <Card key={i + 1} className="h-full min-h-0 min-w-0 overflow-hidden pb-0! pt-2! pl-3!">
                          <Flex direction="column" className="h-full min-h-0">
                            <Text color={cardDate.toDateString() == new Date().toDateString() ? "ruby" : "gray"} size="3" weight="medium">{i + 1}</Text>
                            <Box className="min-h-0 w-full flex-1 overflow-y-auto">
                              {
                                examList
                                  .filter((exam) =>
                                    exam.startDate.getFullYear() === cardDate.getFullYear() &&
                                    exam.startDate.getMonth() === cardDate.getMonth() &&
                                    exam.startDate.getDate() === cardDate.getDate()
                                  )
                                  .map((exam) => (
                                    <Popover.Root key={exam.id}>
                                      <Popover.Trigger>
                                        <button className="flex w-full min-w-0 items-center text-left leading-none mb-1">
                                          <Badge
                                            className={"max-w-full min-w-0 overflow-hidden pt-0! pb-0! pl-0!"}
                                            size="1"
                                            color={
                                              exam.users.some((user) => user.userId == session?.user.id)
                                                ? "yellow"
                                                : "gray"
                                            }
                                            radius="full"
                                          >
                                            {exam.users.map((user, i) => (
                                              <Avatar
                                                key={user.userId}
                                                className={i != 0 ? "-translate-x-2 -mr-2" : ""}
                                                size="1"
                                                radius="full"
                                                src={user.userImg || undefined}
                                                fallback={user.userName[0]}
                                                color={ user.userId == session?.user.id ? "yellow" : "gray"}
                                              />                                          ))}
                                            <span className="min-w-0 flex-1 truncate">{exam.name}</span>
                                          </Badge>
                                        </button>
                                      </Popover.Trigger>
                                      <Popover.Content>
                                        <Flex direction="column">
                                          <Text as="div" weight="medium" key={exam.id}>
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
                                          <Flex direction="row" gap="2" className={"mt-1"}>
                                            {
                                              exam.users.map((user) => (
                                                <Badge key={user.userId} className={"pt-0! pb-0! pl-0!"} size="1" color={user.userId == session?.user.id ? "yellow" : "gray"} radius="full">
                                                  <Avatar size="1" radius="full" src={user.userImg || undefined} fallback={user.userName[0]} />
                                                  {user.userName}
                                                </Badge>
                                              ))
                                            }
                                          </Flex>
                                        </Flex>
                                      </Popover.Content>
                                    </Popover.Root>
                                  ))
                              }
                            </Box>
                          </Flex>
                        </Card>
                      );
                    })}
                  </>
                }
              </Grid>
            </Skeleton>
          </Flex>
        </Box>
      </CheckSignInDialog>

      {/*<GetUserExamsDialog>
        <Button className={"absolute top-1/2 left-1/2"}>SHOW</Button>
      </GetUserExamsDialog>*/}

      <FooterBar />
    </>
  );
}