/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/app/components/mobile/NavBar";
import redirect from "../components/redirect";

const Home = () => {
  redirect("/", true);
  return (
    <>
      <NavBar activePage={"home"} />
      <div className={"absolute grid left-0 right-20 h-full py-6 grid-cols-1 grid-rows-2 gap-4"}>
        <a href={"/mobile/minecraft"} className={"relative group row-start-1 row-span-1 col-start-1 col-span-1"}>
          <div
            className={"bg-[url(/menu/minecraft.webp)] bg-cover absolute w-full h-full group-hover:brightness-[30%] transition-all !duration-[600]"}/>
          <div
            className={"absolute w-full brightness-100 text-[#FFFFFF] text-xl text-center top-[75%] group-hover:underline transition-all !duration-[600]"}>
            Minecraft
          </div>
        </a>
        <a href={"/mobile/minecraft"} className={"relative group row-start-2 row-span-1 col-start-1 col-span-1"}>
          <div
            className={"bg-[url(/menu/formulaone.webp)] bg-cover absolute w-full h-full brightness-[70%] group-hover:brightness-[30%] transition-all !duration-[600]"}/>
          <div
            className={"absolute w-full brightness-100 text-[#FFFFFF] text-xl text-center top-[75%] group-hover:underline transition-all !duration-[600]"}>
            Formula 1
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
