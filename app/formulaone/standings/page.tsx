"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import Drivers from "@/app/components/formulaone/standings/Drivers";

const Page = () => {
  return (
    <>
      <NavBar activePage="formulaone" />
      <Paragraph title="World Drivers' Championship">
        <Drivers />
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;
