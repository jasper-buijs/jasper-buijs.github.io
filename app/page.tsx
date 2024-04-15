"use client";

import Alert from "./components/Alert";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import Paragraph from "./components/Paragraph";
import { GridMenu, GridMenuElement } from "./components/GridMenu";
import redirect from "./components/redirect";

const Home = () => {
  redirect("/", false);
  return (
    <>
      <NavBar activePage="home" />
      {/*<Alert type="info" text="As you can see, our website is back - sort of. In the meantime, feel free to browse through what's here already, or find us in Discord." />*/}
      <GridMenu>
        <GridMenuElement bgImage="/menu/minecraft.webp" title="Minecraft" href="/minecraft" columns={[1, 1]} rows={[1, 1]} />
        <GridMenuElement bgImage="/menu/formulaone.webp" title="Formula 1" href="/formulaone" columns={[2, 1]} rows={[1, 1]} />
      </GridMenu>
      <FooterBar />
    </>
  );
};

export default Home;
