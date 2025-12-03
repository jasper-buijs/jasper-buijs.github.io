"use client";

import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import { ClipboardCopy, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

const links = {
  rome: {
    apple: "https://maps.apple.com/place?address=Via%20Carlo%20Piaggia%206,%2000122%20Lido%20di%20Ostia,%20Rome,%20Italy&coordinate=41.714591,12.319818&name=AirBnB%20Rome",
    google: "https://maps.app.goo.gl/4HPshhXAsqb8NtUi7",
    copy: "Via Carlo Piaggia 6, Lido di Ostia, Rome, Italy"
  },
  milan: {
    apple: "https://maps.apple.com/place?address=Via%20Lanfranco%20della%20Pila%2066,%2020162%20Milan,%20Italy&coordinate=45.517313,9.203014&name=AirBnB%20Milan",
    google: "https://maps.app.goo.gl/Z9c69hwDbQaPKfUY9",
    copy: "Via Lanfranco della Pila 66, Milan, Italy"
  }
}

interface MapsOverlayProps{
  place: "rome" | "milan";
  vis: boolean;
  setVis: Dispatch<SetStateAction<boolean>>
}
const MapsOverlay = ({ place, vis, setVis }: MapsOverlayProps) => {
  return(
    <>
      <div className={`absolute z-50 top-[12%] bottom-[12%] left-[12%] right-[12%] bg-[#E6E6E6] dark:bg-[#101010] ${vis ? "block" : "hidden"}`}>
        <div className={"relative w-full h-full"}>
          <button className={"absolute z-10 right-4 top-4"} onClick={() => setVis(false)}>
            <X size={28} className={"text-[#1E1E1E] dark:text-[#FFFFFF]"}/>
          </button>
          <div className={"absolute z-0 top-0 bottom-0 left-0 right-0 grid grid-rows-3"}>
            <a href={links[place]["apple"]} className={"row-start-1 m-auto"}>
              <Image src={"/logos/maps/Apple_Maps_Logo_3D.png"} alt={"Apple Maps"} width={400} height={400} className={"!aspect-square h-[15vh] w-[15vh]"} />
            </a>
            <a href={links[place]["google"]} className={"row-start-2 m-auto"}>
              <Image src={"/logos/maps/Google_Maps_icon_(2020).svg"} alt={"Google Maps"} width={400} height={400} className={"!aspect-square h-[15vh] w-[15vh]"} />
            </a>
            <button onClick={() => navigator.clipboard.writeText(links[place]["copy"])} className={"row-start-3 m-auto"}>
              <ClipboardCopy size={256} className={"!aspect-square h-[15vh] w-[15vh] text-black max-w-full"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Page = () => {
  const [ isMapsOverlayVisible, setMapsOverlayVisibility ] = useState<boolean>(false);
  const [ place, setPlace ] = useState<"rome" | "milan">("rome");
  return (
    <>
      <NavBar activePage={"none"} />
      <MapsOverlay place={place} vis={isMapsOverlayVisible} setVis={setMapsOverlayVisibility} />
      <div className="py-6 pl-2 pr-20">
        <Paragraph title={"Quick Links"}>
          <div className={"grid grid-rows-2 w-full mb-4"}>
            <a href={"https://spliit.app/groups/lQVHIuHnnINs4JkKQ5zJY/expenses?ref=share"} className={"row-start-1 w-[60vw] m-auto"}>
              <Image src={"/thiings/spliit.png"} className={"w-[60vw]"} alt={"spliit"} width={1024} height={1024} />
              <div className={"w-[60vw] text-center font-semibold text-2xl -mt-4"}>Spliit</div>
            </a>
            <button onClick={() => {setMapsOverlayVisibility(true); setPlace("rome");}} className={"row-start-2 m-auto w-[60vw]"}>
              <Image src={"/thiings/airbnb-1.png"} className={"w-[60vw]"} alt={"AirBnB Rome"} width={1024} height={1024} />
              <div className={"w-[60vw] text-center font-semibold text-2xl -mt-4"}>AirBnB Rome</div>
              <div className={"w-[60vw] text-center mt-1"}>Via Carlo Piaggia 3, Lido di Ostia, Rome, Italy</div>
            </button>
          </div>
        </Paragraph>
        <Paragraph title={"Documents"}>
          <div className={"mb-4"}>
            <a href={"/italy-docs/Info Italy JLAR.pdf"} target={"_blank"} className={"underline"}>Algemene info <ExternalLink size={20} className={"inline-block ml-1"} /></a><br /><br />
            <a href={"/italy-docs/vlucht-kort.pdf"} target={"_blank"} className={"underline"}>Tickets vlucht <ExternalLink size={20} className={"inline-block ml-1"} /></a>
          </div>
        </Paragraph>
      </div>
    </>
  );
}

export default Page;