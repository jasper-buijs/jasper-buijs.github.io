"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import type { Exam } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
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
      <div className={"fixed top-20 bottom-20 left-12 right-12"}>
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

// KULEUVEN
const KULeuvenInput = () => {
  const [queuedExams, setQueuedExams] = useState<QueuedKulExam[]>([]);
  const [kulFormValues, setKulFormValues] = useState({OpoCode: "", KULDate: "", KULTime: ""});
  useEffect(() => {
    fetch(`/api/exams/currentExams`)
      .then((r) => r.json())
      .then((data) => {
        setQueuedExams(data.exams.map((e: any) => {
          e.startDate = new Date(e.startDate);
          return e;
        }));
        setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
      });
  }, []);
  const onKulInputChange = (event: any) => {
    const { name, value } = event.target;
    setKulFormValues({ ...kulFormValues, [name]: value });
  };
  const onKulSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch(`https://dataservice.kuleuven.be/opo/_search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: {
          query_string: {
            query: kulFormValues.OpoCode.toUpperCase()
          }
        }
      }),
    });
    const data = await res.json();
    let name;
    if (data.hits.hits.length == 0) name = "No results for course code.";
    else if (String(data.hits.hits[0]["_source"].ectsCode).toUpperCase() != kulFormValues.OpoCode.toUpperCase()) name = "Course not found in API.";
    else name = data.hits.hits[0]["_source"].moduleLanguageSet[0].moduleTitleSet[0].description || "Error fetching course name.";
    const newExam: QueuedKulExam = {
      name: name,
      courseCode: kulFormValues.OpoCode,
      startDate: new Date(`${kulFormValues.KULDate} ${kulFormValues.KULTime}`),
    };
    setQueuedExams([...queuedExams, newExam]);
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  };
  const onDeleteQueuedExam = (e: QueuedKulExam) => {
    setQueuedExams(queuedExams.filter((qe) => qe != e));
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  }
  const onSubmitQueuedExams = async () => {
    await fetch(`/api/exams/setExams`, {
      method: "POST",
      body: JSON.stringify(queuedExams),
    });
    window.location.reload();
  }
  return (
    <>
      <form onSubmit={onKulSubmit}>
        <label htmlFor={"OpoCode"} className={"mr-2"}>OPO Code:</label>
        <input type={"text"} id={"OpoCode"} name={"OpoCode"} placeholder={"W0AE0A"} required value={kulFormValues.OpoCode} onChange={onKulInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <label htmlFor={"KULDate"} className={"mr-2"}>Date:</label>
        <input type={"date"} id={"KULDate"} name={"KULDate"} min={"2025-12-01"} max={"2026-02-06"} required value={kulFormValues.KULDate} onChange={onKulInputChange} className={"mr-4 p-2 rounded-md h-8 dark:text-black"} />
        <label htmlFor={"KULTime"} className={"mr-2"}>Time:</label>
        <input type={"time"} id={"KULTime"} name={"KULTime"} required value={kulFormValues.KULTime} onChange={onKulInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <input type={"submit"} value={"➕ ADD"} className={"font-semibold bg-green-400 rounded-md p-1 dark:text-black"} />
      </form>
      <div className={"w-full grid grid-cols-[15%,_55%,_15%,_10%,_5%] pt-4"}>
        {queuedExams.map((e) =>
          <>
            <div key={`OpoCode-${queuedExams.indexOf(e)}`} className={"col-start-1"}>{e.courseCode}</div>
            <div key={`Name-${queuedExams.indexOf(e)}`} className={"col-start-2"}>{e.name}</div>
            <div key={`Date-${queuedExams.indexOf(e)}`} className={"col-start-3"}>{e.startDate.toLocaleDateString("nl", { dateStyle: "short" })}</div>
            <div key={`Time-${queuedExams.indexOf(e)}`} className={"col-start-4"}>{e.startDate.toLocaleTimeString("nl", { timeStyle: "short" })}</div>
            <button key={`Delete-${queuedExams.indexOf(e)}`} onClick={() => onDeleteQueuedExam(e)} className={"col-start-5 font-semibold bg-red-600 text-white rounded-md p-1 mb-2"}>{"✖️ DEL"}</button>
          </>
        )}
      </div>
      <div className={"w-full block"}>
        <button onClick={onSubmitQueuedExams} className={"block ml-auto mr-4 font-semibold bg-green-400 rounded-md p-1 my-2 dark:text-black"}>{"💾 SAVE"}</button>
      </div>
    </>
  );
}

// VUB
const VUBInput = () => {
  const [queuedExams, setQueuedExams] = useState<QueuedKulExam[]>([]);
  const [vubFormValues, setVubFormValues] = useState({OpoCode: "", VUBDate: "", VUBTime: ""});
  useEffect(() => {
    fetch(`/api/exams/currentExams`)
      .then((r) => r.json())
      .then((data) => {
        setQueuedExams(data.exams.map((e: any) => {
          e.startDate = new Date(e.startDate);
          return e;
        }));
        setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
      });
  }, []);
  const onVubInputChange = (event: any) => {
    const { name, value } = event.target;
    setVubFormValues({ ...vubFormValues, [name]: value });
  };
  const onVubSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`/api/exams/vubFetch?id=${vubFormValues.OpoCode}`);
    const data = await res.json();
    const parser = new DOMParser();
    const xmlData = parser.parseFromString(data.xmlText, "text/xml");
    const title = xmlData.getElementsByTagName("course")[0].getElementsByTagName("title")[1].textContent;

    let name;
    if (!title) name = "No results for course code.";
    else name = title || "Error fetching course name.";
    const newExam: QueuedKulExam = {
      name: name,
      courseCode: vubFormValues.OpoCode,
      startDate: new Date(`${vubFormValues.VUBDate} ${vubFormValues.VUBTime}`),
    };
    setQueuedExams([...queuedExams, newExam]);
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  };
  const onDeleteQueuedExam = (e: QueuedKulExam) => {
    setQueuedExams(queuedExams.filter((qe) => qe != e));
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  }
  const onSubmitQueuedExams = async () => {
    await fetch(`/api/exams/setExams`, {
      method: "POST",
      body: JSON.stringify(queuedExams),
    });
    window.location.reload();
  }
  return (
    <>
      <form onSubmit={onVubSubmit}>
        <label htmlFor={"OpoCode"} className={"mr-2"}>OPO Code:</label>
        <input type={"text"} id={"OpoCode"} name={"OpoCode"} placeholder={"012345"} required value={vubFormValues.OpoCode} onChange={onVubInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <label htmlFor={"VUBDate"} className={"mr-2"}>Date:</label>
        <input type={"date"} id={"VUBDate"} name={"VUBDate"} min={"2025-12-01"} max={"2026-02-06"} required value={vubFormValues.VUBDate} onChange={onVubInputChange} className={"mr-4 p-2 rounded-md h-8 dark:text-black"} />
        <label htmlFor={"KULTime"} className={"mr-2"}>Time:</label>
        <input type={"time"} id={"VUBTime"} name={"VUBTime"} required value={vubFormValues.VUBTime} onChange={onVubInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <input type={"submit"} value={"➕ ADD"} className={"font-semibold bg-green-400 rounded-md p-1 dark:text-black"} />
      </form>
      <div className={"w-full grid grid-cols-[15%,_55%,_15%,_10%,_5%] pt-4"}>
        {queuedExams.map((e) =>
          <>
            <div key={`OpoCode-${queuedExams.indexOf(e)}`} className={"col-start-1"}>{e.courseCode}</div>
            <div key={`Name-${queuedExams.indexOf(e)}`} className={"col-start-2"}>{e.name}</div>
            <div key={`Date-${queuedExams.indexOf(e)}`} className={"col-start-3"}>{e.startDate.toLocaleDateString("nl", { dateStyle: "short" })}</div>
            <div key={`Time-${queuedExams.indexOf(e)}`} className={"col-start-4"}>{e.startDate.toLocaleTimeString("nl", { timeStyle: "short" })}</div>
            <button key={`Delete-${queuedExams.indexOf(e)}`} onClick={() => onDeleteQueuedExam(e)} className={"col-start-5 font-semibold bg-red-600 text-white rounded-md p-1 mb-2"}>{"✖️ DEL"}</button>
          </>
        )}
      </div>
      <div className={"w-full block"}>
        <button onClick={onSubmitQueuedExams} className={"block ml-auto mr-4 font-semibold bg-green-400 rounded-md p-1 my-2 dark:text-black"}>{"💾 SAVE"}</button>
      </div>
    </>
  );
}

// OTHER
const OtherInput = () => {
  const [queuedExams, setQueuedExams] = useState<QueuedExam[]>([]);
  const [otherFormValues, setOtherFormValues] = useState({name: "", OtherDate: "", OtherTime: ""});
  useEffect(() => {
    fetch(`/api/exams/currentExams`)
      .then((r) => r.json())
      .then((data) => {
        setQueuedExams(data.exams.map((e: any) => {
          e.startDate = new Date(e.startDate);
          return e;
        }));
        setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
      });
  }, []);
  const onOtherInputChange = (event: any) => {
    const { name, value } = event.target;
    setOtherFormValues({ ...otherFormValues, [name]: value });
  };
  const onOtherSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let name = otherFormValues.name;
    const newExam: QueuedExam = {
      name: name,
      startDate: new Date(`${otherFormValues.OtherDate} ${otherFormValues.OtherTime}`),
    };
    setQueuedExams([...queuedExams, newExam]);
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  };
  const onDeleteQueuedExam = (e: QueuedExam) => {
    setQueuedExams(queuedExams.filter((qe) => qe != e));
    setQueuedExams(queuedExams => [...queuedExams].sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));
  }
  const onSubmitQueuedExams = async () => {
    await fetch(`/api/exams/setExams`, {
      method: "POST",
      body: JSON.stringify(queuedExams),
    });
    window.location.reload();
  }
  return (
    <>
      <form onSubmit={onOtherSubmit}>
        <label htmlFor={"name"} className={"mr-2"}>Course name:</label>
        <input type={"text"} id={"name"} name={"name"} placeholder={"Yoga 101"} required value={otherFormValues.name} onChange={onOtherInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <label htmlFor={"KULDate"} className={"mr-2"}>Date:</label>
        <input type={"date"} id={"KULDate"} name={"OtherDate"} min={"2025-12-01"} max={"2026-02-06"} required value={otherFormValues.OtherDate} onChange={onOtherInputChange} className={"mr-4 p-2 rounded-md h-8 dark: text-black"} />
        <label htmlFor={"KULTime"} className={"mr-2"}>Time:</label>
        <input type={"time"} id={"KULTime"} name={"OtherTime"} required value={otherFormValues.OtherTime} onChange={onOtherInputChange} className={"mr-4 p-1 rounded-md h-8 dark:text-black"} />
        <input type={"submit"} value={"➕ ADD"} className={"font-semibold bg-green-400 rounded-md p-1 dark:text-black"} />
      </form>
      <div className={"w-full grid grid-cols-[70%,_15%,_10%,_5%] pt-4"}>
        {queuedExams.map((e) =>
          <>
            <div key={`Name-${queuedExams.indexOf(e)}`} className={"col-start-1"}>{e.name}</div>
            <div key={`Date-${queuedExams.indexOf(e)}`} className={"col-start-2"}>{e.startDate.toLocaleDateString("nl", { dateStyle: "short" })}</div>
            <div key={`Time-${queuedExams.indexOf(e)}`} className={"col-start-3"}>{e.startDate.toLocaleTimeString("nl", { timeStyle: "short" })}</div>
            <button key={`Delete-${queuedExams.indexOf(e)}`} onClick={() => onDeleteQueuedExam(e)} className={"col-start-4 font-semibold bg-red-600 text-white rounded-md p-1 mb-2"}>{"✖️ DEL"}</button>
          </>
        )}
      </div>
      <div className={"w-full block"}>
        <button onClick={onSubmitQueuedExams} className={"block ml-auto mr-4 font-semibold bg-green-400 rounded-md p-1 my-2 dark:text-black"}>{"💾 SAVE"}</button>
      </div>
    </>
  );
}

const InputForm = () => {
  const [institution, setInstitution] = useState<string>("none")

  return (
    <Paragraph title={"Enter your exams"}>
      <div>
        <label htmlFor={"institutionSelect"} className={"mr-2"}>Select an institiution:</label>
        <select
          id="intitutionSelect"
          className={"p-1 rounded-md h-8 dark:text-black"}
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        >
          <option value={"none"} disabled>Choose an institution</option>
          <option value={"kul"}>KULeuven</option>
          <option value={"vub"}>VUB</option>
          <option value={"other"}>Other</option>
        </select>
      </div>
      <br />
      <div className={institution == "kul" ? "block" : "hidden"}>
        <KULeuvenInput />
      </div>
      <div className={institution == "vub" ? "block" : "hidden"}>
        <VUBInput />
      </div>
      <div className={institution == "other" ? "block" : "hidden"}>
        <OtherInput />
      </div>
    </Paragraph>
  );
}

const StudyView = () => {
  useEffect(() => {
    fetch(`/api/checkGuild`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 400 && data.redirect) window.location.assign(new URL(data.redirect, window.location.toString()));
        else if (data.status != 200) window.location.assign(new URL("/", window.location.toString()));
    });
  }, []);

  const [exams, setExams] = useState<Exam[]>([]);
  const [groupedExams, setGroupedExams] = useState<GroupedExam[]>([]);

  useEffect(() => {
    fetch(`/api/exams/allExams`)
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
      //date.setHours(8, 0, 0);
      if (!result[dateStr]) result[dateStr] = { date, exams: [] };
      result[dateStr].exams.push(obj);
    }
    setGroupedExams(
      Object.values(result).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
    //console.log(groupedExams);
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
            <div className={"uppercase font-semibold mb-1"}>{group.date.toLocaleString(undefined, {dateStyle: "full"})}</div>
            <div className={"grid grid-cols-[28px,_1fr]"}>
              {group.exams.map((exam) =>
                <>
                  <ProfilePictureDisplay key={`pp-${exam.id}`} id={String(exam.userId)} />
                  <div key={`txt-${exam.id}`} className={"col-start-2 mb-2"}>{`\"${exam.name}\" at ${exam.startDate.toLocaleString(undefined, { timeStyle: "short" })}`}</div>
                </>
              )}
            </div>
          </div>
        )}
      </Paragraph>
    </>
  );
}


const Home = () => {
  const [exams, setExams] = useState<Exam[] | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/exams/currentExams`)
      .then((r) => r.json())
      .then((data) => {
        if (data.redirect) window.location.assign(new URL(data.redirect, window.location.toString()));
        else setExams(data.exams);
      });
  }, []);


  return(
    <>
      <NavBar activePage={"study"} />
      <div className={exams && "hidden"}>
        <Loading />
      </div>
      <div className={exams == undefined || exams.length == 0 ? "hidden" : "block"}>
        <StudyView />
      </div>
      <div className={exams == undefined ? "hidden" : "block"}>
        <InputForm />
      </div>
      <FooterBar />
    </>
  );
}

export default Home;