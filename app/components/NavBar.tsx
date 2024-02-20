import Link from "next/link";
import { useState, useEffect } from "react";

const getStatus = (setStreamStatus: Function) => {
  useEffect(() => {
    fetch("http://live.heiligemaagden.com/mystream/index.m3u8", { cache: "no-store" })
      .then((r) => {
        if (!r) setStreamStatus(false);
        else if (r.status != 200) setStreamStatus(false);
        else setStreamStatus(true);
      })
      .catch(() => {
        setStreamStatus(false);
      });
  }, []);
};

interface NavBarProps {
  activePage: "home" | "wumpus" | "minecraft" | "formulaone" | "none";
}
const NavBar = ({ activePage }: NavBarProps) => {
  const [streamStatus, setStreamStatus] = useState(false);
  getStatus(setStreamStatus);
  const linkClassFilter = (page: string) => {
    return page == activePage ? "text-[#BA9C0D] dark:text-[#CFB53B]" : "text-[#1E1E1E] dark:text-[#FFFFFF]";
  };
  return (
    <>
      {/*<!-- Actual NavBar -->*/}
      <div className="h-16 px-12 w-full fixed z-50">
        <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] relative">
          <img src="/logo.png" alt="Heilige Maagden Logo" className="inline-block h-16 w-16 mr-8" />
          <Link href="/" className={"m-4 " + linkClassFilter("home")}>
            Heilige Maagden
          </Link>
          <Link href="/wumpus" className={"m-4 " + linkClassFilter("wumpus")}>
            Wumpus
          </Link>
          <Link href="/minecraft" className={"m-4 " + linkClassFilter("minecraft")}>
            Minecraft
          </Link>
          <Link href="/formulaone" className={"m-4 " + linkClassFilter("formulaone")}>
            Formula 1
          </Link>
          {streamStatus && (
            <a href="/stream">
              <div className="inline-block bg-red-600 text-white p-1 rounded absolute top-4 bottom-4 right-4">📡 online</div>
            </a>
          )}
          {!streamStatus && (
            <a href="http://live.heiligemaagden.com/mystream">
              <div className="inline-block bg-gray-500 text-white p-1 rounded absolute top-4 bottom-4 right-4">⚪ offline</div>
            </a>
          )}
        </div>
      </div>
      {/*<!-- NavBar Spacer underneath -->*/}
      <div className="h-16 w-full"></div>
    </>
  );
};

export default NavBar;
