"use client"

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import { AnnouncementHeaderGrid, AnnouncementHeaderGridElement } from "@/app/components/formulaone/car-launches/AnnouncementHeader";
import Modal from "@/app/components/formulaone/car-launches/Modal";
import { useState } from "react";
import { dataType as modalObjectDataType } from "@/app/components/formulaone/car-launches/Modal";

const CarLaunchFormulaOnePage = () => {
  const [modal, setModal] = useState<keyof modalObjectDataType>("none");
  return (
    <>
      <NavBar activePage="formulaone" />
      {modal != "none" && <Modal activeModal={modal} setModalFunction={setModal} />}
      <Paragraph emoji="📅" title="Announced Car Launches">
        <AnnouncementHeaderGrid>
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Williams24.png" setModalFunction={setModal} name="williams" row={1} column={1} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Sauber24.png" setModalFunction={setModal} name="sauber" row={1} column={2} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Alpine24.png" setModalFunction={setModal} name="alpine" row={2} column={1} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Ferrari24.png" setModalFunction={setModal} name="ferrari" row={2} column={2} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Mercedes24.png" setModalFunction={setModal} name="mercedes" row={3} column={1} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/McLaren24.png" setModalFunction={setModal} name="mclaren" row={3} column={2} />
        </AnnouncementHeaderGrid>
      </Paragraph>
      <Paragraph emoji="❓" title="Unannounced Car Launches">
        <div className="grid grid-rows-1 auto-cols-fr w-100 h-auto">
          <img src="/formulaone/team-logos/AlphaTauri.png" className="row-start-1 row-span-1 col-start-1 col-span-1" />
          <img src="/formulaone/team-logos/AstonMartin.png" className="row-start-1 row-span-1 col-start-2 col-span-1" />
          <img src="/formulaone/team-logos/Haas.png" className="row-start-1 row-span-1 col-start-3 col-span-1" />
          <img src="/formulaone/team-logos/RedBullAlt.png" className="row-start-1 row-span-1 col-start-4 col-span-1" />
        </div>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default CarLaunchFormulaOnePage;