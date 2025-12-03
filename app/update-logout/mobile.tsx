"use client";

import NavBar from "@/app/components/mobile/NavBar";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      signOut({ callbackUrl: "/update-login" });
    }, 5000);
  }, []);

  return(
    <>
      <NavBar activePage={"none"} />
      <div className={"fixed top-6 bottom-6 left-2 right-20 flex justify-center items-center text-center"}>
        <div className={"whitespace-pre-line text-wrap"}>
          {"Because we did some updates, you need to sign in using Discord again. You will be logged out automatically in 5 seconds."}
        </div>
      </div>
    </>
  );
}

export default Home;