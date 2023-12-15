"use client"

import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import FooterBar from "../components/FooterBar";
import Link from "next/link";
import Paragraph from "../components/Paragraph";

const MinecraftPage = () => {
  const copyIpToClipboard = () => {
    navigator.clipboard.writeText("server.heiligemaagden.com");
    console.log("clipboard updated");
  };
  return (
    <>
      <NavBar activePage="minecraft" />
      <Alert type="warning" text="The Minecraft server is currently down due to low demand. It may return after the exam period, maybe with a new world. If you still want to play on the old server, send a message in our Discord and I'll try to boot up the server as soon as possible." />
      <img src="/logo-mc.png" className="block ml-auto mr-auto" />
      <h1 className="text-center text-3xl mt-4">Heilige Maagden Minecraft Server</h1>
      <Link href="" onClick={() => navigator.clipboard.writeText("minecraft.heiligemaagden.com")} className=" block text-center text-lg text-[#cfb53b] underline">minecraft.heiligemaagden.com</Link >
      <Paragraph emoji="ℹ️" title="General Info">
        Our server is back! New start, new world, same concept.
        We play in hard-difficulty survival, with PvP enabled but (usually) not the essence of the server.
        Everyone is free to join on <b>minecraft.heiligemaagden.com</b>.
        The server is vanilla-ish - though we run some mods to optimise game handling barely anything in-game gets changed.
        We also use four datapacks to alter the game behavior slightly:
        <ol>
          <li className="pl-2">1. One adds gravestones to the game: when a player die, a gravestone will spawn with their items where they died, which can be collected. This way, when you die, you don't have to rush to get your stuff within the despawn time.</li>
          <li className="pl-2">2. A second one makes it so item frames that are currently holding items will turn invisible. This allows you to use item frames for decorational purposes without heaving the ugly leather background appear.</li>
          <li className="pl-2">3. We have one that makes nametags craftable. To make one, you'll need two leather or rabbit hide and one string. 4. Lastly, we have one that pauses the game when no one is online, that way the total age of the server will beter represent overall playtime by our players.</li>
        </ol>
      </Paragraph>
      <Paragraph emoji="🛠️" title="Daily Blackout Period">
        Every day, our server will go offline between 6 am and 7:30 am.
        If you're still actively playing, you will be warned and should probably disconnect.
        If you're AFK you'll be kicked. The server will begin to start up at 7:30 am, though it can take some time for it to get back online.
        You should really only be connecting starting around 7:40 am if possible.
      </Paragraph>
      <Paragraph emoji="🛟" title="Useful Resources">
        In Discord, we've created a "server-coords" channel where you can share and/or save important coordinates from our server.
        Also, if you want to know weather the server is up, you can check the status page on <a href="https://admin.minecraft.heiligemaagden.com/status">https://admin.minecraft.heiligemaagden.com/status</a>.
        It may warn you of being unsafe; it's not, though I won't oblige you to continue.
        If that page is down as well, not only our server but also it's host have been turned off or disconnected, meanning the server will be offline for sure.
      </Paragraph>
      <Paragraph emoji="🗺️" title="World Map">
        This is a top-down view of the overworld.
        This map will be updated once every day around 7 am.
        You can also open a fullscreen version of this map <a href="/minecraft-map/unmined.index.html" className="underline">here</a>.
        <iframe src="/minecraft-map/unmined.index.html" className="w-full h-[75vh]">The map is still loading. Wait a while or try again later.</iframe>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default MinecraftPage;