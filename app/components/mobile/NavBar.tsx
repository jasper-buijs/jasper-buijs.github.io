/* eslint-disable @next/next/no-img-element */
import {
  Icon,
  Bot,
  House,
  Pickaxe,
  Copyright,
  CircleUserRound,
  UserRoundCheck,
  MonitorOff,
  MonitorPlay,
} from "lucide-react";
import { motorRacingHelmet } from "@lucide/lab";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link';
import { NavBarProps } from "@/app/components/NavBar";
import { useEffect, useState } from "react";

const NavBar = ({ activePage }: NavBarProps) => {
  const [ isStreamActive, setStreamActive ] = useState<boolean>(false);

  useEffect(() => {
    const room = "live-room";
    fetch(`/api/activeStream?room=${room}`).then((r) => {
      r.json().then((data) => {
        setStreamActive(data.live);
      });
    }).catch((_e) => setStreamActive(false)); // &username=${name}
  }, [isStreamActive]);

  const activeLinkColor = (page: string) => page == activePage ? "text-[#BA9C0D] dark:text-[#CFB53B]" : "text-[#0F0F0F] dark:text-[#FFFFFF]";
  const { data: session } = useSession();
  return (
    <>
      <div className={"w-16 py-6 h-full fixed z-50 right-0"}>
        <div className={"bg-[#D6D6D6] dark:bg-[#1E1E1E] relative h-full"}>
          <img src="/logo.png" alt="Heilige Maagden Logo" className="inline-block h-16 w-16 mr-8"/>
          <div className={"flex h-16 w-16 justify-center items-center"}>
            <Link className={`w-full h-full text-4xl leading-[4rem] ${activeLinkColor("home")}`} href={"/"}>
              <House className={"m-[20px]"} />
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center items-center"}>
            <Link className={`w-full h-full text-4xl leading-[4rem] ${activeLinkColor("magmuth")}`} href={"/magmuth"}>
              <Bot className={"m-[20px]"} />
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center items-center"}>
            <Link className={`w-full h-full text-4xl leading-[4rem] ${activeLinkColor("minecraft")}`} href={"/minecraft"}>
              <Pickaxe className={"m-[20px]"} />
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center items-center"}>
            <Link className={`w-full h-full text-4xl leading-[4rem] ${activeLinkColor("formulaone")}`} href={"/formulaone"}>
              <Icon iconNode={motorRacingHelmet} className={"m-[20px]"} />
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center items-center"}>
            { !isStreamActive &&
              <Link className={`w-full h-full text-4xl leading-[4rem] text-[#0F0F0F] dark:text-[#FFFFFF]`} href={"/live"}>
                <MonitorOff className={"m-[20px]"} />
              </Link>
            }
            { isStreamActive &&
              <Link className={`w-full h-full text-4xl leading-[4rem] text-red-600 dark:text-red-500`} href={"/live"}>
                <MonitorPlay className={"m-[20px]"} />
              </Link>
            }
          </div>
          {/* Sign-in and Copyright popup */}
          <div className={"h-[calc(100%-(6*64px))] w-16 relative"}>
            <div className={"flex h-16 w-16 justify-center items-center absolute bottom-16"}>
              {
                !session &&
                <button
                  className={"w-full h-full text-4xl leading-[4rem] text-[#BA9C0D] dark:text-[#CFB53B]"}
                  onClick={() => signIn("discord")}
                >
                  <CircleUserRound className={"m-[20px]"} />
                </button>
              }
              {
                session && session.user?.image &&
                <Link
                  className={"w-full h-full text-4xl leading-[4rem]"}
                  href="/api/auth/signout"
                >
                  <Image
                    src={session.user.image}
                    alt={session.user?.name || "Profile picture"}
                    width={24}
                    height={24}
                    className={"rounded-[50%] m-[20px]"}
                  />
                </Link>
              }
              {
                session && !session.user?.image &&
                <Link
                  className={"w-full h-full text-4xl leading-[4rem]"}
                  href="/api/auth/signout"
                >
                  <UserRoundCheck className={"m-[20px]"} />
                </Link>
              }
            </div>
            <div className={"flex h-16 w-16 justify-center items-center absolute bottom-0"}>
              <button
                className={`w-full h-full text-4xl leading-[4rem] ${activeLinkColor("NONE_COPYRIGHT")}`}
                onClick={() => alert("© Jasper Buijs, Heilige Maagden, 2025")}
              >
                <Copyright className={"m-[20px]"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;