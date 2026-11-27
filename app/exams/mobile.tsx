"use client";

import { Exam } from "@/app/api/exams/getAllExams/route";
import { CheckSignInDialog } from "@/app/components/mobile/CheckSignInDialog";
import { GetUserExamsDialog } from "@/app/components/mobile/exams/GetUserExamsDialog";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import { authClient } from "@/auth-client";
import { Avatar, Badge, Button, Card, Flex, Text } from "@radix-ui/themes";
import { SquarePen } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function MobilePage() {
  const { data: session } = authClient.useSession();
  const [loadingCal, setLoadingCal] = useState<boolean>(true);
  const [examList, setExamList] = useState<Exam[]>([]);
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
      date.setFullYear(currentYear - 1, 11, 1);
      setStartFilterDate(date.getTime());
      date.setFullYear(currentYear, 0, 1);
      date.setDate(31);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else if (currentMonth < 6) {
      // Feb-Jun -> May & Jun
      date.setFullYear(currentYear, 4, 1);
      setStartFilterDate(date.getTime());
      date.setFullYear(currentYear, 5, 1);
      date.setDate(30);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else if (currentMonth < 8 || (currentMonth == 8 && currentDay < 20)) {
      // Jul-Sep 20 -> Aug & Sep
      date.setFullYear(currentYear, 7, 1);
      setStartFilterDate(date.getTime());
      date.setFullYear(currentYear, 8, 1);
      date.setDate(30);
      setEndFilterDate(date.getTime());
      setLoadingCal(false);
    } else {
      // Sep 20-Dec -> Dec & Jan
      date.setFullYear(currentYear, 11, 1);
      setStartFilterDate(date.getTime());
      date.setFullYear(currentYear + 1, 0, 1);
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
        <div className="pl-2 pr-20 py-6">
          <Paragraph title={"EXAMS"}>
            <Flex direction="column" className={"mt-2"}>
              <Flex direction="row">
                <Flex direction="column" className="flex-1">
                  <Text weight="medium">Upcoming exams:</Text>
                  <Text size="1">Find a list of all exams on PC</Text>
                </Flex>
                <GetUserExamsDialog updateCallback={() => fetchExams(startFilterDate, endFilterDate)}>
                  <Button size="3">
                    <SquarePen />
                  </Button>
                </GetUserExamsDialog>
              </Flex>

              {
                !examList.length && !loadingCal &&
                <Text className="mt-6">No upcoming exams this period. Check back later!</Text>
              }
              {
                examList.length &&
                examList
                  .filter((exam) => exam.startDate.getTime() > new Date().getTime())
                  .toSorted((a, b) => a.startDate.getTime() - b.startDate.getTime())
                  .slice(0, 10)
                  .map((exam) => (
                    <Card key={exam.id} className={"mt-2"}>
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
                    </Card>
                  ))
              }
            </Flex>
          </Paragraph>
        </div>
      </CheckSignInDialog>
    </>
  );
}