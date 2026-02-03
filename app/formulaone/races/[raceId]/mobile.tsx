/* eslint-disable @next/next/no-img-element,react-hooks/rules-of-hooks */
"use client";

import NavBar from "@/app/components/mobile/NavBar";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { redirect as rd } from "next/navigation";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const raceIds = ["pst1", "pst2", "pst3", "australia", "china", "japan", "bahrain", "saudi-arabia", "miami", "canada", "monaco",
  "barcelona", "austria", "great-britain", "belgium", "hungary", "netherlands", "italy", "spain", "azerbaijan", "singapore",
  "united-states", "mexico", "brazil", "las-vegas", "qatar", "abu-dhabi", "usa", "cota", "catalunya", "saudi", "uk", "dutch",
  "baku", "vegas", "uae"];

const Loading = () => {
  return (
    <>
      <div className={"fixed top-20 bottom-20 left-2 right-20"}>
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

const generateStaticParams = async () => {
  return raceIds.map((raceId) => ({ raceId }));
}

const Page = ({ raceId }: { raceId: string }) => {
  // Redirect alternative urls
  if (raceId == "cota") rd("/formulaone/races/usa");
  if (raceId == "catalunya") rd("/formulaone/races/barcelona");
  if (raceId == "saudi") rd("/formulaone/races/saudi-arabia");
  if (raceId == "uk") rd("/formulaone/races/great-britain");
  if (raceId == "dutch") rd("/formulaone/races/netherlands");
  if (raceId == "baku") rd("/formulaone/races/azerbaijan");
  if (raceId == "vegas") rd("/formulaone/races/las-vegas");
  if (raceId == "uae") rd("/formulaone/races/abu-dhabi");
  if (["usa", "cota", "saudi", "uk", "dutch", "baku", "vegas", "uae"].includes(raceId)) {
    return(<div>Redirecting...</div>);
  }

  const [title, setTitle] = useState<string | undefined>(undefined);
  const [link, setLink] = useState<string | null>(null)
  useEffect(() => {
    fetch(`/api/formulaone/getInfo?id=${raceId}`, { method: "GET" })
      .then((r) => r.json())
      .then((d) => {
        setTitle(d.title);
        setLink(d.link);
      });
  }, []);

  return(
    <>
      <NavBar activePage="formulaone" />
      <div className={title && "hidden"}>
        <Loading />
      </div>
      <div className={`w-full text-center text-2xl font-semibold pt-14 ml-2 mr-20 max-w-[calc(100%-5rem)] text-balance ${!title && "hidden"}`}>{title}</div>
      <div className={`w-full text-center mt-2 ml-2 mr-20 max-w-[calc(100%-5rem)] ${!link && "hidden"}`}>
        <div className={`mb-4 text-balance`}>Linking you to discord... Be sure to allow pop-ups.</div>
        <a
          href={link?.replace("https://", "discord://")}
          target={"_blank"}
          className={`inline-block mr-2 rounded-md p-2 bg-[#5865F2] text-[#ffffff] w-max h-min`}
        >
          <SiDiscord title={"Discord"} className={`inline-block mr-1 align-middle text-white`} />
          <div className={`inline-block mr-2 align-middle`}>Open in Discord</div>
        </a>
        <Link
          href={`/formulaone`}
          className={`inline-block rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min`}
        >
          Go back
        </Link>
      </div>
      <div className={`w-full text-center mt-2 ml-2 mr-20 max-w-[calc(100%-5rem)] ${title && link == null ? "block" : "hidden"}`}>
        <div className={"mb-1 text-balance"}>The discord page with updates for this GP has not yet been created.</div>
        <a
          href={`discord://discord.com/channels/585896430380777503/1209621587217875034`}
          target={"_blank"}
          className={`inline-block mr-2 rounded-md p-2 bg-[#5865F2] text-[#ffffff] w-max h-min`}
        >
          <SiDiscord title={"Discord"} className={`inline-block mr-1 align-middle text-white`} />
          <div className={`inline-block align-middle`}>#results</div>
        </a>
        <a
          href={`discord://discord.com/channels/585896430380777503/1189576541894611054`}
          target={"_blank"}
          className={`inline-block rounded-md p-2 bg-[#5865F2] text-[#ffffff] w-max h-min`}
        >
          <SiDiscord title={"Discord"} className={`inline-block mr-1 align-middle text-white`} />
          <div className={`inline-block align-middle`}>#news</div>
        </a>
      </div>
    </>
  );
}

export default Page;
export { generateStaticParams };