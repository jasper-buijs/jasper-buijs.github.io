import NavBar from "../components/NavBar";
import Alert from "../components/Alert";
import FooterBar from "../components/FooterBar";

const MinecraftPage = () => {
  return (
    <>
      <NavBar activePage="minecraft" />
      <Alert type="warning" text="The Minecraft server is currently down due to low demand. It may return after the exam period, maybe with a new world. If you still want to play on the old server, send a message in our Discord and I'll try to boot up the server as soon as possible." />
      <Alert type="info" text="This page is currently being rebuilt. Please check back later for more information." />
      <FooterBar />
    </>
  );
}

export default MinecraftPage;