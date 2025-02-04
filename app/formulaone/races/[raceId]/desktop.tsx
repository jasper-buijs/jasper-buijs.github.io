/* eslint-disable @next/next/no-img-element */

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import { redirect as rd } from "next/navigation";

const raceIds = ["pst", "australia", "china", "japan", "bahrain", "saudi-arabia", "miami", "imola", "monaco",
  "spain", "canada", "austria", "great-britain", "belgium", "hungary", "netherlands", "italy", "azerbaijan", "singapore",
  "united-states", "mexico", "brazil", "las-vegas", "qatar", "abu-dhabi", "usa", "cota", "saudi", "uk", "dutch",
  "baku", "vegas", "uae"];

const generateStaticParams = async () => {
  return raceIds.map((raceId) => ({ raceId }));
}

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
      <div className={"w-full text-center mt-4 mx-12"}>We&apos;re still working on the race pages for the 2025 season. Check back before Pre-Season Testing for more!</div>
      <FooterBar/>
    </>
  );
}

export default Page;
export { generateStaticParams };