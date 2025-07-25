/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/app/components/mobile/NavBar";

const Home = () => {
  return (
    <>
      <NavBar activePage={"home"} />
      <div className={"absolute grid left-2 right-20 h-full py-6 grid-cols-1 grid-rows-2 gap-4"}>
        <a href={"/magmuth/changelog"} className={"relative group row-start-1 row-span-1 col-start-1 col-span-1"}>
          <div className={"bg-[url(/menu/magmuth.webp)] bg-cover absolute w-full h-full brightness-[70%] group-hover:brightness-[30%] transition-all !duration-[600]"} />
          <div className={"absolute w-full brightness-100 text-[#FFFFFF] text-xl text-center top-[75%] group-hover:underline transition-all !duration-[600]"}>
            Magmuth Patch Notes
          </div>
        </a>
        <a href={"/formulaone"} className={"relative group row-start-2 row-span-1 col-start-1 col-span-1"}>
          <div className={"bg-[url(/menu/formulaone.webp)] bg-cover absolute w-full h-full brightness-[70%] group-hover:brightness-[30%] transition-all !duration-[600]"} />
          <div className={"absolute w-full brightness-100 text-[#FFFFFF] text-xl text-center top-[75%] group-hover:underline transition-all !duration-[600]"}>
            Formula 1
          </div>
        </a>
      </div>
      {/*<div className={`fixed ml-4 mr-24 w-[calc(100vw-6rem)] my-6 h-[calc(100vh-3rem)] border-none z-0 bg-white`}>
       <iframe
       src='https://flo.uri.sh/story/2684611/embed'
       title='Interactive or visual content'
       className={`flourish-embed-iframe w-full h-[calc(125vh-3rem)] border-none z-0 scale-75 translate-y-[-12%] outline-none`}
       sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
       >
       </iframe>
       </div>*/}
    </>
  );
};

export default Home;
