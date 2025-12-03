"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
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
      <div className={"fixed inset-0 flex justify-center items-center text-center"}>
        <div className={"whitespace-pre-line"}>
          {"Logging you back in..."}
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default Home;