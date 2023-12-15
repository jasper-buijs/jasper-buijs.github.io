import Link from "next/link";

interface NavBarProps {
  activePage: string;
}
const NavBar = ({ activePage }: NavBarProps) => {
  const linkClassFilter = (page: string) => { return page == activePage ? "text-[#BA9C0D] dark:text-[#CFB53B]" : "text-[#1E1E1E] dark:text-[#FFFFFF]" };
  return (
    <>
      {/*<!-- Actual NavBar -->*/}
      <div className="h-16 px-12 w-full fixed z-50">
        <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E]">
          <img src="/logo-xmas.png" alt="Heilige Maagden Logo" className="inline-block h-16 w-16 mr-8" />
          <Link href="/" className={"m-4 " + linkClassFilter("home")}>Heilige Maagden</Link>
          <Link href="/minecraft" className={"m-4 " + linkClassFilter("minecraft")}>Minecraft</Link>
        </div>
      </div>
      {/*<!-- NavBar Spacer underneath -->*/}
      <div className="h-16 w-full"></div>
    </>
  );
}

export default NavBar;