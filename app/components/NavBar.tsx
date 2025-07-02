/* eslint-disable @next/next/no-img-element */
import { CircleUserRound, UserRoundCheck } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  activePage: "home" | "magmuth" | "minecraft" | "formulaone" | "none";
}
const NavBar = ({ activePage }: NavBarProps) => {
  const linkClassFilter = (page: string) => {
    return page == activePage ? "text-[#BA9C0D] dark:text-[#CFB53B]" : "text-[#1E1E1E] dark:text-[#FFFFFF]";
  };
  const { data: session } = useSession();
  return (
    <>
      {/*<!-- Actual NavBar -->*/}
      <div className="h-16 px-12 w-full fixed z-50">
        <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] relative">
          <img src="/logo.png" alt="Heilige Maagden Logo" className="inline-block h-16 w-16 mr-8" />
          <Link href="/" className={"m-4 " + linkClassFilter("home")}>
            Heilige Maagden
          </Link>
          <Link href="/magmuth" className={"m-4 " + linkClassFilter("magmuth")}>
            Magmuth
          </Link>
          <Link href="/minecraft" className={"m-4 " + linkClassFilter("minecraft")}>
            Minecraft
          </Link>
          <Link href="/formulaone" className={"m-4 " + linkClassFilter("formulaone")}>
            Formula 1
          </Link>
          {
            <a href="http://live.heiligemaagden.com/mystream">
              <div className="inline-block bg-red-600 text-white p-1 rounded absolute top-4 bottom-4 right-16">📡 Live Stream</div>
            </a>
          }
          {
            !session &&
            <button
              className={"inline-block absolute top-4 bottom-4 right-4 text-[#BA9C0D] dark:text-[#CFB53B]"}
              onClick={() => signIn("discord")}
            >
              <CircleUserRound size={32} />
            </button>
          }
          {
            session && session.user?.image &&
            <Link
              className={"inline-block absolute top-4 bottom-4 right-4"}
              href="/api/auth/signout"
            >
              <Image
                src={session.user.image}
                alt={session.user?.name || "Profile picture"}
                width={32}
                height={32}
                className={"rounded-[50%]"}
              />
            </Link>
          }
          {
            session && !session.user?.image &&
            <Link
              className={"inline-block absolute top-4 bottom-4 right-4 text-[#BA9C0D] dark:text-[#CFB53B]"}
              href="/api/auth/signout"
            >
              <UserRoundCheck size={32} />
            </Link>
          }
        </div>
      </div>
      {/*<!-- NavBar Spacer underneath -->*/}
      <div className="h-16 w-full"></div>
    </>
  );
};

export default NavBar;
export type { NavBarProps };
