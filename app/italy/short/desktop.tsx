"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
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
      <div className={`absolute top-1/4 bottom-1/4 left-1/4 right-1/4 bg-[#E6E6E6] dark:bg-[#101010] ${vis ? "block" : "hidden"}`}>
        <div className={"relative w-full h-full"}>
          <button className={"absolute z-10 right-4 top-4"} onClick={() => setVis(false)}>
            <X className={"text-[#1E1E1E] dark:text-[#FFFFFF]"}/>
          </button>
          <div className={"absolute z-0 top-0 bottom-0 left-0 right-0 grid grid-cols-3"}>
            <a href={links[place]["apple"]} className={"col-start-1 m-auto p-8"}>
              <Image src={"/logos/maps/Apple_Maps_Logo_3D.png"} alt={"Apple Maps"} width={400} height={400} className={"!aspect-square"} />
            </a>
            <a href={links[place]["google"]} className={"col-start-2 m-auto p-8"}>
              <Image src={"/logos/maps/Google_Maps_icon_(2020).svg"} alt={"Google Maps"} width={400} height={400} className={"!aspect-square"} />
            </a>
            <button onClick={() => navigator.clipboard.writeText(links[place]["copy"])} className={"col-start-3 m-auto p-8"}>
              <ClipboardCopy size={256} className={"!aspect-square text-black max-w-full"} />
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
      <NavBar activePage={"italy"} />
      <MapsOverlay place={place} vis={isMapsOverlayVisible} setVis={setMapsOverlayVisibility} />
      <Paragraph title={"Quick Links"}>
        <div className={"grid grid-cols-2 w-full mb-4"}>
          <a href={"https://spliit.app/groups/lQVHIuHnnINs4JkKQ5zJY/expenses?ref=share"} className={"col-start-1 m-auto"}>
            <Image src={"/thiings/spliit.png"} className={"h-60 w-60"} alt={"spliit"} width={1024} height={1024} />
            <div className={"w-60 text-center font-semibold text-4xl -mt-4"}>Spliit</div>
          </a>
          <button onClick={() => {setMapsOverlayVisibility(true); setPlace("rome");}} className={"col-start-2 m-auto"}>
            <Image src={"/thiings/airbnb-1.png"} className={"h-60 w-96 px-[4.5rem]"} alt={"AirBnB Rome"} width={1024} height={1024} />
            <div className={"w-96 text-center font-semibold text-4xl -mt-4"}>AirBnB Rome</div>
            <div className={"w-96 text-center mt-1"}>Via Carlo Piaggia 3, Lido di Ostia, Rome, Italy</div>
          </button>
        </div>
      </Paragraph>
      <Paragraph title={"Documents"}>
        <div>
          <a href={"/italy-docs/Info Italy JLAR.pdf"} target={"_blank"} className={"underline"}>Algemene info <ExternalLink size={20} className={"inline-block ml-1"} /></a><br />
          <a href={"/italy-docs/vlucht-kort.pdf"} target={"_blank"} className={"underline"}>Tickets vlucht (heen en terug) <ExternalLink size={20} className={"inline-block ml-1"} /></a>
        </div>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default Page;