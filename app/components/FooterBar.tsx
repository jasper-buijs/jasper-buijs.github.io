const FooterBar = () => {
  return (
    <>
      {/*<!-- Actual FooterBar -->*/}
      <div className="h-16 px-12 w-full fixed bottom-0">
        <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] h-full">
          <p className="leading-[4rem] w-full text-center text-[#1E1E1E] dark:text-[#FFFFFF]">© Jasper Buijs, Heilige Maagden, 2023</p>
        </div>
      </div>
      {/*<!-- FooterBar Spacer underneath -->*/}
      <div className="h-16 w-full bottom-0"></div>
    </>
  );
}

export default FooterBar;