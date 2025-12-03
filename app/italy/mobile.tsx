"use client";

import NavBar from "@/app/components/mobile/NavBar";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <NavBar activePage={"none"} />
      <div className={"absolute left-2 right-20 top-5 bottom-6 grid grid-rows-2"}>
        <Link href={"/italy/short"} className={"h-max w-max row-start-1 m-auto"}>
          <Image className={"w-[20vw] m-auto aspect-square rounded-md"} width="512" height="512" src="/logo-italy.png" alt="Jesus logo over an intalian flag" />
          <div className={"text-2xl w-[60vw] text-center font-semibold mt-4 mb-2"}>Roma</div>
          <div className={"text-md w-[60vw] text-center"}>Italia &apos;25</div>
        </Link>
        <Link href={"/italy/long"} className={"h-max w-max row-start-2 m-auto"}>
          <Image className={"w-[20vw] m-auto aspect-square rounded-md"} width="512" height="512" src="/logo-italy.png" alt="Jesus logo over an intalian flag" />
          <div className={"text-2xl w-[60vw] text-center font-semibold mt-4 mb-2"}>Roma - Milano</div>
          <div className={"text-md w-[60vw] text-center"}>Italia &apos;25</div>
        </Link>
      </div>
    </>
  );
}

export default Page;