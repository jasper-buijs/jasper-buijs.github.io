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
      <Alert type="warning" text="The Minecraft server and admin page will be offline from Sunday February 11 (evening) until Monday February 12 (late afternoon), and again from Sunday February 18 (evening) until Monday February 19 (late afternoon)." />
      <div className="block w-max ml-auto mr-auto mt-8">
        <img src="/logo-mc.png" className="inline-block mr-8 h-64" />
        <a href="https://www.curseforge.com/minecraft/modpacks/minecolonies-dimensional-adventure" className="inline-block">
          <img src="https://cdn.modrinth.com/data/HqE7wBYb/e4fc44e09ef18ec432a21b1d1675c0fdf1788bca.jpeg" className="inline-block h-64" />
        </a>
      </div>
      <h1 className="text-center text-3xl mt-4">MineColonies: Dimensional Adventure</h1>
      <Link href="" onClick={() => navigator.clipboard.writeText("minecraft.heiligemaagden.com")} className=" block text-center text-lg text-[#cfb53b] underline">
        minecraft.heiligemaagden.com
      </Link>
      <Paragraph emoji="ℹ️" title="General Info">
        Our server is back, and this time it's modded. We've relaunched our server with the MineColonies: Dimensional Adventure modpack and Forge mod loader.
        <br />
        <br />
        "Embark on a world of creation and discovery with MineColonies: Dimensional Adventure. This modpack elevates your Minecraft experience from mere building to crafting stories, growing communities, and carving out your own unique journey. As the architect of your domain, breathe life into your colony one block at a time. Let your town bristle with activity, every corner buzzing with the life you brought into the world. But don't get too comfortable! Beyond the cozy lanes of your town lie uncharted dimensions, eerie dungeons, and distant planets, all waiting for a daring explorer to uncover their secrets."
      </Paragraph>
      <Paragraph emoji="🛟" title="Mods Recuired To Play">
        In order to play, you'll also need to install the modpack clientsided. You can do this using the Curseforge App or the Prism Launcher. There, download and install{" "}
        <a href="https://www.curseforge.com/minecraft/modpacks/minecolonies-dimensional-adventure" className="text-blue-800 underline">
          the modpack
        </a>{" "}
        in order to play.
      </Paragraph>
      <Paragraph emoji="🌐" title="Server Up-Time">
        The server won't always be online. If you want to play when the server is offline, send us a message in Discord. You can check whether the server is online, and how many players are active, on{" "}
        <a href="https://minecraft.heiligemaagden.com:8443/status" className="text-blue-800 underline">
          this site
        </a>
        . Your browser may mark this as unsafe as this page is locally hosted, but you can safely continue. When this page is offline, the server will be too.
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default MinecraftPage;
