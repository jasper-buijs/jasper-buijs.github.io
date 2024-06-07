/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";

const Home = () => {
  redirect("/formulaone/races/emilia-romagna", true);
  return (
    <>
      <img src="/logo.png" alt="Heilige Maagden Logo" className="fixed bottom-[54%] h-24 w-24 left-[50%] ml-[-3rem]"/>
      <p className="text-center fixed top-[50%] w-full text-[#cfb53b]">
        Mobile devices aren&apos;t supported here yet.
        <br/>
        Please use a laptop or desktop.
      </p>
      <div className={"text-center fixed top-[62%] w-full"}>
        <a href={"/mobile"} className={"text-center bg-[#cfb53b] rounded-lg px-2 py-2"}>🏠</a>
      </div>
    </>
  );
};

export default Home;