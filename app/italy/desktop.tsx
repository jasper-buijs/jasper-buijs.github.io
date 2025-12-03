"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <NavBar activePage={"none"} />
      <div className={"absolute left-12 right-12 top-20 bottom-20 grid grid-cols-2"}>
        <Link href={"/italy/short"} className={"h-max w-max col-start-1 m-auto"}>
          <Image className={"w-[20vw] max-w-[40vh] aspect-square rounded-md"} width="512" height="512" src="/logo-italy.png" alt="Jesus logo over an intalian flag" />
          <div className={"text-4xl w-[20vw] max-w-[40vh] text-center font-semibold mt-4 mb-2"}>Roma</div>
          <div className={"text-xl w-[20vw] max-w-[40vh] text-center"}>Italia &apos;25</div>
        </Link>
        <Link href={"/italy/long"} className={"h-max w-max col-start-2 m-auto"}>
          <Image className={"w-[20vw] max-h-[40vh] aspect-square rounded-md"} width="512" height="512" src="/logo-italy.png" alt="Jesus logo over an intalian flag" />
          <div className={"text-4xl w-[20vw] max-w-[40vh] text-center font-semibold mt-4 mb-2"}>Roma - Milano</div>
          <div className={"text-xl w-[20vw] max-w-[40vh] text-center"}>Italia &apos;25</div>
        </Link>
      </div>
      <FooterBar />
    </>
  );
}

export default Page;