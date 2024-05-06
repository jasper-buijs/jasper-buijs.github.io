"use client"

import NavBar from "@/app/components/NavBar";
import FooterBar from "@/app/components/FooterBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const PDFPage: React.FunctionComponent = () => {
  redirect("/formulaone", false);
  return (
    <>
      <NavBar activePage={"formulaone"} />
      <Paragraph title={"Formula 1 Financial Regulations 2024"}>
        <iframe
          src={ "https://www.fia.com/sites/default/files/fia_formula_1_financial_regulations_-_issue_20_-_2024-04-30.pdf" }
          className={"h-[78vh] w-full"}>
        </iframe>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default PDFPage;