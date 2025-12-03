"use client";

import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import type { Exam } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

interface QueuedExam {
  name: string,
  startDate: Date,
}

interface QueuedKulExam extends QueuedExam {
  courseCode: string
}

interface GroupedExam {
  date: Date,
  exams: Exam[]
}

const Loading = () => {
  return (
    <>
      <div className={"fixed top-6 bottom-6 left-2 right-20"}>
        <div className={"block mx-auto mt-4 h-max w-max"}>
          <TailSpin
            visible
            height="80"
            width="80"
            color={"white"}
            radius="1"
          />
        </div>
      </div>
    </>
  );
}

const InputForm = () => {
  return (
    <Paragraph title={"Enter exams"}>
      {"Entering your exams is currently only supported on desktop. Open this page on a your computer to enter them. Once you've done this, you'll be able to see everyone's exams here, also on mobile."}
    </Paragraph>
  );
}

const Home = () => {
  useEffect(() => {
    fetch(`/api/checkGuild`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 400 && data.redirect) window.location.assign(new URL(data.redirect, window.location.toString()));
        else if (data.status != 200) window.location.assign(new URL("/", window.location.toString()));
    });
  }, []);

  const [exams, setExams] = useState<Exam[] | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/exams/currentExams`)
      .then((r) => r.json())
      .then((data) => {
        if (data.redirect) window.location.assign(new URL(data.redirect, window.location.toString()));
        else setExams(data.exams);
      });
  }, []);

  const StudyView = () => {
    const [exams, setExams] = useState<Exam[]>([]);
    const [groupedExams, setGroupedExams] = useState<GroupedExam[]>([]);

    useEffect(() => {
      fetch(`/api/exams/currentExams`)
        .then((r) => r.json())
        .then((data) => {
          setExams(data.exams.map((e: any) => {
            e.startDate = new Date(e.startDate);
            return e;
          }));
          //setExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
        });
    }, []);

    useEffect(() => {
      const result: Record<string, GroupedExam> = {};
      for (const obj of exams) {
        const dateStr = obj.startDate.toLocaleDateString("en", { dateStyle: "medium" });
        const date = obj.startDate;
        date.setHours(8, 0, 0);
        if (!result[dateStr]) result[dateStr] = { date, exams: [] };
        result[dateStr].exams.push(obj);
      }
      setGroupedExams(
        Object.values(result).sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      );
    }, [exams]);

    interface ProfilePictureDisplayProps {
      id: string
    }
    const ProfilePictureDisplay = ({ id }: ProfilePictureDisplayProps) => {
      const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNDRkI1M0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZC1pY29uIGx1Y2lkZS1jaXJjbGUtdXNlci1yb3VuZCI+PHBhdGggZD0iTTE4IDIwYTYgNiAwIDAgMC0xMiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMCIgcj0iNCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PC9zdmc+");

      useEffect(() => {
        //console.log(`ID: ${id}`);
        fetch(`/api/exams/getImageUrl?id=${id}`)
          .then((data) => data.json())
          .then((data) => {
            try {
              if (Boolean(new URL(data.imageSrc))) setSrc(data.imageSrc);
            } catch {
              console.error("Profile picture is not a URL.");
            }
          });
      }, []);

      return <Image width={24} height={24} src={src} alt={"profile picture"} className={"block col-start-1 rounded-full"} />;
    }

    return (
      <>
        <Paragraph title={"LIST OF EXAMS"}>
          {groupedExams.map((group) =>
            <div key={`group-${group.date.toISOString()}`} className={"mb-4"}>
              <div className={"uppercase font-semibold mb-1"}>{group.date.toLocaleString(undefined, {dateStyle: "medium"})}</div>
              <div className={"grid grid-cols-[28px,_1fr]"}>
                {group.exams.map((exam) =>
                  <>
                    <ProfilePictureDisplay key={`pp-${exam.id}`} id={String(exam.userId)} />
                    <div key={`txt-2-${exam.id}`} className={"col-start-2"}>{`at ${exam.startDate.toLocaleString(undefined, { timeStyle: "short" })}:`}</div>
                    <div key={`txt-1-${exam.id}`} className={"col-start-1 col-span-2 text-nowrap truncate mb-2"}>{exam.name}</div>
                  </>
                )}
              </div>
            </div>
          )}
        </Paragraph>
      </>
    );
  }

  return(
    <>
      <NavBar activePage={"study"} />
      <div className={exams && "hidden"}>
        <Loading />
      </div>
      <div className="py-6 pl-2 pr-20">
        <div className={exams == undefined || exams.length == 0 ? "hidden" : "block"}>
          <StudyView />
        </div>
        <div className={exams == undefined ? "hidden" : "block"}>
          <InputForm />
        </div>
      </div>
    </>
  );
}

export default Home;