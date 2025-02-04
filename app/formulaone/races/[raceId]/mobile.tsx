/* eslint-disable @next/next/no-img-element */

import NavBar from "@/app/components/mobile/NavBar";
import { redirect as rd } from "next/navigation";

const Page = ({ raceId }: { raceId: string }) => {
  // Redirect alternative urls
  if (["usa", "cota"].includes(raceId)) rd("/formulaone/races/usa");
  if (raceId == "saudi") rd("/formulaone/races/saudi-arabia");
  if (raceId == "uk") rd("/formulaone/races/great-britain");
  if (raceId == "dutch") rd("/formulaone/races/netherlands");
  if (raceId == "baku") rd("/formulaone/races/azerbaijan");
  if (raceId == "vegas") rd("/formulaone/races/las-vegas");
  if (raceId == "uae") rd("/formulaone/races/abu-dhabi");
  if (["usa", "cota", "saudi", "uk", "dutch", "baku", "vegas", "uae"].includes(raceId)) {
    return(<div>Redirecting...</div>);
  }

  return(
    <>
      <NavBar activePage="formulaone" />
      <div className={"fixed ml-2 mr-20 mb-6 z-50 mt-5 text-center"}>We&apos;re still working on the race pages for the 2025 season. Check back before Pre-Season Testing for more!</div>
    </>
  );
}

export default Page;