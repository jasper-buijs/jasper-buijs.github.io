/* eslint-disable @next/next/no-img-element */
"use client";

import Alert from "@/app/components/mobile/Alert";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import Link from "next/link";

const Home = () => {
  const downTimes = [
    {
      date: "2025-08-02",
      start: "15:35:00.000",
      end: "18:00:00.000"
    },
    {
      date: "2025-08-03",
      start: "14:15:00.000",
      end: "18:00:00.000"
    },
    {
      date: "2025-08-11",
      start: "06:00:00.000",
      end: "18:00:00.000"
    },
    {
      date: "2025-08-14",
      start: "06:00:00.000",
      end: "14:00:00.000"
    },
    {
      date: "2025-08-25",
      start: "06:00:00.000",
      end: "14:00:00.000"
    },
    {
      date: "2025-08-30",
      start: "14:35:00.000",
      end: "17:00:00.000"
    },
    {
      date: "2025-08-31",
      start: "14:15:00.000",
      end: "18:00:00.000"
    },
    {
      date: "2025-09-01",
      start: "06:00:00.000",
      end: "18:00:00.000"
    }
  ]

  return (
    <>
      <NavBar activePage="minecraft" />
      <div className="fixed ml-2 mr-20 mb-6 z-50 mt-5">
        {downTimes.map((t) => t.date).includes(new Date().toISOString().split("T")[0]) &&
          <Alert
            type="danger"
            text={`The server will be offline today between 
              ${new Date(`${downTimes.find((t) => t.date == new Date().toISOString().split("T")[0])?.date}T${downTimes.find((t) => t.date == new Date().toISOString().split("T")[0])?.start}`).toLocaleTimeString("nl-be", {timeStyle: "short"})}
              –
              ${new Date(`${downTimes.find((t) => t.date == new Date().toISOString().split("T")[0])?.date}T${downTimes.find((t) => t.date == new Date().toISOString().split("T")[0])?.end}`).toLocaleString("nl-be", {timeStyle: "short"})}
              `}
          />
        }
        {/*<Alert type="info" text={`Whitelist will be enabled on our server on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {dateStyle: "long", timeStyle: "short"})}. You should log on at least once before then.`} />*/}
      </div>
      <div className="py-6 pl-2 pr-20">
        <div className="block w-max ml-auto mr-auto">
          <img src="/logo-mc.png" className="inline-block h-64 max-h-[70vw]"
            alt={"Heilige Maagden Minecraft Server logo."}
          />
        </div>
        <h1 className="text-center text-3xl mt-4">HM Vanilla Server</h1>
        <Link href="" className=" block text-center text-lg text-[#cfb53b] underline mb-4">
          minecraft.heiligemaagden.com
        </Link>
        <Paragraph emoji="ℹ️" title="General Info">
          Our server is back yet again, with a new iteration of our vanilla survival multiplayer. Our server is very vanilla-ish, though we have made some small modifications:
          <br /><br />
          <ul className="list-disc pl-4">
            <li>We run some Fabric mods to add structures, and reduce lag and improve server performance (especially when loading and generating chunks). The mods we currently have running are:
              <ul className="list-disc pl-8">
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/dungeons-and-taverns">Dungeons and Taverns</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/fabric-api">Fabric API</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/c2me-fabric">C2ME</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/ferrite-core">FerriteCore</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/lithium">Lithium</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/disconnect-packet-fix">Disconnect Packet Fix</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/plugin/chunky">Chunky</Link></li>
              </ul>
            </li>
            <li>We currently don&apos;t have any data or resource packs active.</li>
          </ul>
          <br />
          Our server runs on Minecraft 1.21.8 (Java Edition). When a newer version of the game is released, we plan to update after a couple of weeks.
        </Paragraph>
        <Paragraph emoji="🌐" title="Server Up-Time">
          The server won&apos;t always be online, but we try to keep uptime as big as possible. You can check whether the server is online <Link className={"text-[#cfb53b] underline hover:text-inherit"} href={"https://admin.minecraft.heiligemaagden.com/status"}>here</Link> (check for &qout;Vanilla 25-2&qout;). We&apos;ll try to announce in advance, on this page and in the server MOTD, when the server will be offline, though this is no guarantee. Expected downtime in August:
          <ul className={"list-disc list-inside"}>
            {/*<li>{new Date("2025-08-02T15:35:00.000+02:00").toLocaleString()} – {new Date("2025-08-02T18:00:00.000+02:00").toLocaleTimeString()}</li>*/}
            {downTimes.map((t) => <li key={t.date}>{new Date(`${t.date}T${t.start}+02:00`).toLocaleString("nl-be", {dateStyle: "short", timeStyle: "short"})} – {new Date(`${t.date}T${t.end}+02:00`).toLocaleTimeString("nl-be", {timeStyle: "short"})}</li>)}
          </ul>
        </Paragraph>
        <Paragraph emoji="🗺️" title="World Map">
          {`The map of our world as it was on ${new Date("2025-08-10T09:00:00+02:00").toLocaleString("en-us", {day: "numeric", month: "short"})} can be viewed on this page on desktop. Mobile is not (yet) supported. If you are on desktop, you should try making this window larger.`}
        </Paragraph>
      </div>
    </>
  );
};

export default Home;
