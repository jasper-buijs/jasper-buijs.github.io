import { Avatar, Badge } from "@radix-ui/themes";
import { CircleUserRound, MonitorOff, SatelliteDish } from "lucide-react";
import { authClient } from "@/auth-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

interface NavBarProps {
  activePage: "home" | "magmuth" | "minecraft" | "formulaone" | "study" | "pt26" |  "none";
}
const NavBar = ({ activePage }: NavBarProps) => {
  const [ isStreamActive, setStreamActive ] = useState<boolean>(false);

  useEffect(() => {
    // const room = "live-room";
    fetch(`/api/live/checkActiveStream`).then((r) => {
      r.json().then((data: { live: boolean }) => {
        setStreamActive(data.live);
      });
    }).catch((_e) => setStreamActive(false)); // &username=${name}
  }, []);

  const linkClassFilter = (page: string) => {
    return page == activePage ? "text-yellow-10" : "text-gray-12";
  };
  const { data: session } = authClient.useSession();
  return (
    <>
      {/*<!-- Actual NavBar -->*/}
      <div className="h-16 px-12 w-full fixed z-50">
        <div className={`bg-background relative ${nunito.className}`}>
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
          <Link href="/pt26" className={"m-4 " + linkClassFilter("pt26")}>
            Lisboa–Porto &apos;26
          </Link>
          {/*<Link href="/formulaone" className={"m-4 " + linkClassFilter("formulaone")}>
            Formula 1
          </Link>*/}
          {/*<Link href="/study" className={"m-4 " + linkClassFilter("study")}>
            Study
          </Link>*/}
          { isStreamActive
            ? <>
              <Link href="/live">
                <Badge size="3" color="red" variant="solid" className="inline-block absolute top-1/2 -translate-y-1/2 right-16">
                  <SatelliteDish size="16" className={"inline-block align-middle mr-2"} />
                  <div className={"inline-block align-middle"}>Live Stream</div>
                </Badge>
              </Link>
            </> : <>
              <Link href="/live">
                <Badge size="3" color="gray" variant="soft" className="inline-block absolute top-1/2 -translate-y-1/2 right-16">
                  <MonitorOff size="16" className={"inline-block align-middle mr-2"} />
                  <div className={"inline-block align-middle"}>Stream Offline</div>
                </Badge>
              </Link>
            </>
          }
          {
            !session &&
            <button
              className={"inline-block absolute top-4 bottom-4 right-4 text-yellow-9"}
              onClick={() => authClient.signIn.social({
                provider: "discord",
              })}
            >
              <CircleUserRound size={32} />
            </button>
          }
          {
            session &&
            <button
              className={"inline-block absolute top-1/2 -translate-y-1/2 right-4"}
              onClick={() => authClient.signOut()}
            >
              <Avatar
                radius="full"
                src={session.user.image || undefined}
                fallback={session.user.name[0] || "?"}
                className={"w-8 h-8"}
              />
            </button>
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
