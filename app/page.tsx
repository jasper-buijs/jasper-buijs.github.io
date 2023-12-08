import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar activePage="home" />
      <div className="mx-12">
        <h1 className="font-semibold text-2xl mt-8 mb-4">We're back!</h1>
        <p className="my-4">
          As you can see, our website is back - sort of.
          I&apos;m still working to get more pages online, and to add support for mobile devices and devices in light mode.
          And while we&apos;re at it, this page should probably get a revamp soon too.
          In the mean time, feel free to browse through what&apos;s here already, or find us in Discord.
        </p>
      </div>
      <FooterBar />
    </>
  );
}

export default Home;