/* eslint-disable @next/next/no-img-element */
import { Icon, Bot, House, Pickaxe, Copyright } from "lucide-react";
import { motorRacingHelmet } from "@lucide/lab";
import Link from 'next/link';
import { NavBarProps } from "@/app/components/NavBar";

const NavBar = ({ activePage }: NavBarProps) => {
  const activeLinkColor = (page: string) => page == activePage ? "text-[#BA9C0D] dark:text-[#CFB53B]" : "text-[#0F0F0F] dark:text-[#FFFFFF]";
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
          {/* Copyright popup */}
          <div className={"h-[calc(100%-(5*64px))] w-16 relative"}>
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