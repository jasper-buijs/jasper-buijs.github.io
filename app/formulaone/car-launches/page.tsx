"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import { AnnouncementHeaderGrid, AnnouncementHeaderGridElement } from "@/app/components/formulaone/car-launches/AnnouncementHeader";
import Modal from "@/app/components/formulaone/car-launches/Modal";
import { useState } from "react";
import { dataType as modalObjectDataType } from "@/app/components/formulaone/car-launches/Modal";
import redirect from "../../components/redirect";

const CarLaunchFormulaOnePage = () => {
  redirect("/formulaone/car-launches", false);
  const [modal, setModal] = useState<keyof modalObjectDataType>("none");
  return (
    <>
      <NavBar activePage="formulaone" />
      {modal != "none" && <Modal activeModal={modal} setModalFunction={setModal} />}
      <Paragraph emoji="📅" title="Announced Car Launches">
        <AnnouncementHeaderGrid>
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Haas24.png" setModalFunction={setModal} name="haas" row={1} column={1} past />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Williams24.png" setModalFunction={setModal} name="williams" row={1} column={2} past />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Kick24.png" setModalFunction={setModal} name="kick" row={2} column={1} past />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Alpine24.png" setModalFunction={setModal} name="alpine" row={2} column={2} past />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/RacingBulls24.png" setModalFunction={setModal} name="racingbulls" row={3} column={1} past />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/AstonMartin24.png" setModalFunction={setModal} name="aston" row={3} column={2} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Ferrari24.png" setModalFunction={setModal} name="ferrari" row={4} column={1} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/Mercedes24.png" setModalFunction={setModal} name="mercedes" row={4} column={2} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/McLaren24.png" setModalFunction={setModal} name="mclaren" row={5} column={1} />
          <AnnouncementHeaderGridElement imagePath="/formulaone/car-launches/RedBull24.png" setModalFunction={setModal} name="redbull" row={5} column={2} />
        </AnnouncementHeaderGrid>
      </Paragraph>
    </>
  );
};

export default CarLaunchFormulaOnePage;
