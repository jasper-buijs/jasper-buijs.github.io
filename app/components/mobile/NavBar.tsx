/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { NavBarProps } from "@/app/components/NavBar";

const NavBar = ({ activePage }: NavBarProps) => {
  return (
    <>
      <div className={"w-16 py-6 h-full fixed z-50 right-0"}>
        <div className={"bg-[#D6D6D6] dark:bg-[#1E1E1E] relative h-full"}>
          <img src="/logo.png" alt="Heilige Maagden Logo" className="inline-block h-16 w-16 mr-8"/>
          <div className={"flex h-16 w-16 justify-center align-middle"}>
            <Link className={"text-4xl leading-[4rem]"} href={"/mobile"}>
              🏠
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center align-middle"}>
            <Link className={"text-4xl leading-[4rem]"} href={"/mobile/wumpus"}>
              🤖
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center align-middle"}>
            <Link className={"text-4xl leading-[4rem]"} href={"/mobile/minecraft"}>
              ⛏️
            </Link>
          </div>
          <div className={"flex h-16 w-16 justify-center align-middle"}>
            {/*<Link className={"text-4xl leading-[4rem]"} href={"/mobile/formulaone"}>
              🏎️
            </Link>*/}
            <div className={"text-4xl leading[4rem] grayscale inline-block"}>
              🏎️
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;