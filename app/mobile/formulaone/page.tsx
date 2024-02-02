"use client";

import redirect from "../../components/redirect";

const Home = () => {
  redirect("/formulaone", true);
  return (
    <>
      <img src="/logo.png" alt="Heilige Maagden Logo" className="fixed bottom-[52%] h-24 w-24 left-[50%] ml-[-3rem]" />
      <p className="text-center fixed top-[52%] w-full text-[#cfb53b]">
        Mobile devices aren't supported yet.
        <br />
        Please use a laptop or desktop.
      </p>
    </>
  );
};

export default Home;
