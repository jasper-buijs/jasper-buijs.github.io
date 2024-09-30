/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import FooterBar from "../components/FooterBar";
import Link from "next/link";
import Paragraph from "../components/Paragraph";
import redirect from "../components/redirect";

const MinecraftPage = () => {
  redirect("/minecraft", false);
  return (
    <>
      <NavBar activePage="minecraft" />
      <Alert type="danger" text={`The server will be offline on ${new Date("2024-10-03T07:00:00+0200").toLocaleString("en-us", {dateStyle: "long"})} from ${new Date("2024-10-03T07:00:00+0200").toLocaleString("en-us", {timeStyle: "short"})} until around ${new Date("2024-10-03T18:00:00+0200").toLocaleString("en-us", {timeStyle: "short"})}. Follow the Discord channel for more specific updates.`} />
      <Alert type="info" text={`Whitlist will be enabled on our server on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {dateStyle: "long", timeStyle: "short"})}. You should log on at least once before then.`} />
      <div className="block w-max ml-auto mr-auto mt-8">
        <img src="/logo-mc.png" className="inline-block h-64" alt={"Heilige Maagden Minecraft Server logo."} />
      </div>
      <h1 className="text-center text-3xl mt-4">HM Vanilla Server</h1>
      <Link href="" onClick={() => navigator.clipboard.writeText("minecraft.heiligemaagden.com")} className=" block text-center text-lg text-[#cfb53b] underline">
        minecraft.heiligemaagden.com
      </Link>
      <Paragraph emoji="ℹ️" title="General Info">
        Our server is back yet again, with a new iteration of our vanilla survival multiplayer. Our server is very vanilla-ish, though we have made some small modifications:
        <ul className="list-disc pl-4">
          <li>We run some behind-the-scenes Fabric mods to reduce lag and improve server performance, especially when loading and generating chunks. The mods we currently have running are:
            <ul className="list-disc pl-8">
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/fabric-api">Fabric API</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/c2me-fabric">Concurrent Chunk Management Engine (C2ME)</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/faster-random">Faster Random</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/ferrite-core">FerriteCore</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/lithium">Lithium</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/modernfix">ModernFix</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/noisium">Noisium</Link></li>
              <li><Link className="text-[#cfb53b] underline hover:text-inherit" href="https://modrinth.com/mod/packet-fixer">Packet Fixer</Link></li>
            </ul>
          </li>
          <li>We also have two data packs installed, which make item frames with items turn invisible and pause the game when no players are logged on.</li>
          <li>We currently don&apos;t have any resource packs active.</li>
          <li>{`We'll be adding two additional mods on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {dateStyle: "long", timeStyle: "short"})}: "Chunky" and "Disconnect Packet Fix".`}</li>
        </ul>
        <br />
        Our server runs on Minecraft: Java Edition version 1.21.1 (the most recent at the time of writing). When a newer version of the game is released, we plan to update after a couple of weeks. You don&apos;t need any client-side mods to be able to play.
      </Paragraph>
      {/*<Paragraph emoji="🛟" title="Mods Recuired To Play">
        In order to play, you&apos;ll also need to install the modpack clientsided. You can do this using the Curseforge App or the Prism Launcher. There, download and install{" "}
        <a href="https://www.curseforge.com/minecraft/modpacks/minecolonies-dimensional-adventure" className="text-blue-800 underline">
          the modpack
        </a>{" "}
        in order to play.
      </Paragraph>*/}
      <Paragraph emoji="🌐" title="Server Up-Time">
        The server won&apos;t always be online. If you want to play when the server is offline, send us a message in Discord. You can check whether the server is online in Discord. We&apos;ll try to announce in advance on the website (at the top of this page), in the server MOTD when the server will be offline, though this is no guarantee.
      </Paragraph>
      <Paragraph emoji="🗺️" title="World Map">
        {`Like on our last server, a map of the server will be made ever so often and uploaded to this page. This map differs from the classical biome maps in that changes to the world (and thus the things you build) will also appear on it. A first version of the map will be uploaded on ${new Date("2024-10-05T09:00:00+0200").toLocaleString("en-us", {dateStyle: "long"})}.`}
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default MinecraftPage;
