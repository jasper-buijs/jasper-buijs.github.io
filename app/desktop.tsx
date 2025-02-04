"use client";

import Alert from "./components/Alert";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import { GridMenu, GridMenuElement } from "./components/GridMenu";
import Script from "next/script";

const Home = () => {

  return (
    <>
      <NavBar activePage="home" />
      {/*<Alert type="info" text="As you can see, our website is back - sort of. In the meantime, feel free to browse through what's here already, or find us in Discord." />*/}
      <GridMenu>
       <GridMenuElement bgImage="/menu/magmuth.webp" title="Magmuth Patch Notes" href="/magmuth/changelog" columns={[1, 1]} rows={[1, 1]} />
       <GridMenuElement bgImage="/menu/formulaone.webp" title="Formula 1" href="/formulaone" columns={[2, 1]} rows={[1, 1]} />
      </GridMenu>
      {/*<div className={`fixed mx-12 mt-4 w-[calc(100vw-6rem)] h-[calc(100vh-10rem)] border-none z-0 bg-white`}>
        <iframe
          src='https://flo.uri.sh/story/2684611/embed'
          title='Interactive or visual content'
          className={`flourish-embed-iframe w-full h-[calc(125vh-10rem)] border-none z-0 scale-75 translate-y-[-12%] outline-none`}
          // h-[800px]
          sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
        >
        </iframe>
      </div>
      <a
        className={`block fixed top-[6rem] right-[4rem] z-1 bg-[#cfb53b] text-black p-2 rounded-md`}
        href="https://flo.uri.sh/story/2684611/embed"
      >
        Open in full-screen (recommended)
      </a>*/}
      <FooterBar />
    </>
  );
};

export default Home;
