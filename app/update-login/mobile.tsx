"use client";

import NavBar from "@/app/components/mobile/NavBar";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      signIn("discord", { callbackUrl: "/" });
    }, 5000);
  }, []);

  return(
    <>
      <NavBar activePage={"none"} />
      <div className={"fixed top-6 bottom-6 left-2 pr-20 flex justify-center items-center text-center"}>
        <div className={"whitespace-pre-line text-wrap"}>
          {"Logging you back in..."}
        </div>
      </div>
    </>
  );
}

export default Home;