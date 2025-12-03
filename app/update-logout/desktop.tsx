"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
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
      <div className={"fixed inset-0 flex justify-center items-center text-center"}>
        <div className={"whitespace-pre-line"}>
          {"Because we did some updates, you need to sign in using Discord again.\nYou will be logged out automatically in 5 seconds."}
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default Home;