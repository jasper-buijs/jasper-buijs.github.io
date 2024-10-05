/* eslint-disable @next/next/no-img-element */
"use client";

import Alert from "@/app/components/mobile/Alert";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import Link from "next/link";
import redirect from "../../components/redirect";

const Home = () => {
  redirect("/minecraft", true);
  return (
    <>
      <NavBar activePage="minecraft" />
      <div className="fixed ml-2 mr-20 mb-6 z-50 mt-5">
        <Alert type="danger" text={`The server will be offline on ${new Date("2024-10-07T07:00:00+0200").toLocaleString("en-us", {dateStyle: "long"})} from ${new Date("2024-10-07T07:00:00+0200").toLocaleString("en-us", {timeStyle: "short"})} until around ${new Date("2024-10-07T14:00:00+0200").toLocaleString("en-us", {timeStyle: "short"})}. Follow the Discord channel for more specific updates.`} />
        {/*<Alert type="info" text={`Whitelist will be enabled on our server on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {dateStyle: "long", timeStyle: "short"})}. You should log on at least once before then.`} />*/}
      </div>
      <div className="py-6 pl-2 pr-20">
        <div className="block w-max ml-auto mr-auto">
          <img src="/logo-mc.png" className="inline-block h-64 max-h-[70vw]"
            alt={"Heilige Maagden Minecraft Server logo."}
          />
        </div>
        <h1 className="text-center text-3xl mt-4">HM Vanilla Server</h1>
        <Link href="" onClick={() => navigator.clipboard.writeText("minecraft.heiligemaagden.com")} className=" block text-center text-lg text-[#cfb53b] underline mb-4">
          minecraft.heiligemaagden.com
        </Link>
        <Paragraph emoji="ℹ️" title="General Info">
          Our server is back yet again, with a new iteration of our vanilla survival multiplayer. Our server is very vanilla-ish, though we have made some small modifications:
          <br /><br />
          <ul className="list-disc pl-4">
            <li>We run some Fabric mods to reduce lag and improve server performance. The mods we currently have running are:
              <ul className="list-disc pl-8">
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/fabric-api">Fabric API</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/c2me-fabric">C2ME</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/faster-random">Faster Random</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/ferrite-core">FerriteCore</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/lithium">Lithium</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/modernfix">ModernFix</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/noisium">Noisium</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/packet-fixer">Packet Fixer</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/disconnect-packet-fix">Disconnect Packet Fix</Link></li>
                <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/plugin/chunky">Chunky</Link></li>
              </ul>
            </li>
            <li>We also have two data packs installed, invisible item frames and game-pause (when there are no players).</li>
            <li>We don&apos;t have any resource packs active.</li>
          </ul>
          <br />
          Our server runs on Minecraft 1.21.1 (Java Edition). When a newer version of the game is released, we plan to update after a couple of weeks.
        </Paragraph>
        <Paragraph emoji="🌐" title="Server Up-Time">
          The server won&apos;t always be online. If you want to play when the server is offline, send a message in Discord. We&apos;ll try to announce on the website (at the top of this page) and in the server MOTD when the server will be offline.
        </Paragraph>
        <Paragraph emoji="🗺️" title="World Map">
          {`The map of our world as it was on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {day: "numeric", month: "short"})} can be viewed on this page on desktop. Mobile is not (yet) supported. If you are on desktop, you should try making this window larger.`}
        </Paragraph>
      </div>
    </>
  );
};

export default Home;
