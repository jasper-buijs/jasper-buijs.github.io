"use client"

import NavBar from "@/app/components/NavBar";
import FooterBar from "@/app/components/FooterBar";
import Paragraph from "@/app/components/Paragraph";

const PDFPage: React.FunctionComponent = () => {
  return (
    <>
      <NavBar activePage={"formulaone"} />
      <Paragraph title={"Formula 1 Sporting Regulations 2024"}>
        <iframe
          src={ "https://www.fia.com/sites/default/files/fia_2024_formula_1_sporting_regulations_-_issue_6_-_2024-04-30_v2.pdf" }
          className={"h-[78vh] w-full"}>
        </iframe>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default PDFPage;