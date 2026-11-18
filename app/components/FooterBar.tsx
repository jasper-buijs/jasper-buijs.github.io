import { FolderCode } from "lucide-react";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const FooterBar = () => {
  return (
    <>
      {/*<!-- Actual FooterBar -->*/}
      <div className={`h-16 px-12 w-full fixed bottom-0 z-50 ${nunito.className}`}>
        <div className="bg-background h-full w-full relative">
          <p className="leading-16 w-full text-center text-gray-12">© Jasper Buijs, Heilige Maagden, 2026</p>
          <Link className={"absolute right-4 bottom-1/2 translate-y-1/2 text-gray-12"} href={"/about"}>
            <FolderCode size={32} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
      {/*<!-- FooterBar Spacer underneath -->*/}
      <div className="h-16 w-full bottom-0"></div>
    </>
  );
}

export default FooterBar;