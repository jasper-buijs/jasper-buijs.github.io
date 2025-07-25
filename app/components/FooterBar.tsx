import { FolderCode } from "lucide-react";
import Link from "next/link";

const FooterBar = () => {
  return (
    <>
      {/*<!-- Actual FooterBar -->*/}
      <div className="h-16 px-12 w-full fixed bottom-0 z-50">
        <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] h-full w-full relative">
          <p className="leading-[4rem] w-full text-center text-[#1E1E1E] dark:text-[#FFFFFF]">© Jasper Buijs, Heilige Maagden, 2025</p>
          <Link className={"absolute right-4 top-4 bottom-4 text-[#1E1E1E] dark:text-[#FFFFFF]"} href={"/about"}>
            <FolderCode size={32} />
          </Link>
        </div>
      </div>
      {/*<!-- FooterBar Spacer underneath -->*/}
      <div className="h-16 w-full bottom-0"></div>
    </>
  );
}

export default FooterBar;