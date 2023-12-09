import Alert from "./components/Alert";
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import Paragraph from "./components/Paragraph";

const Home = () => {
  return (
    <>
      <NavBar activePage="home" />
      <Alert type="succes" text="Our website now supports light/dark mode, based on your OS or browser default setting. A way for you to customise this on the website itself is comming soon™." />
      <Paragraph emoji="👋" title="We're back!">
        <p>
          As you can see, our website is back - sort of.
          I&apos;m still working to get more pages online, and to add support for mobile devices and devices in light mode.
          And while we&apos;re at it, this page should probably get a revamp soon too.
          In the mean time, feel free to browse through what&apos;s here already, or find us in Discord.
        </p>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default Home;