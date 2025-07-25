import Alert from "@/app/components/mobile/Alert";
import NavBar from "@/app/components/mobile/NavBar";

const MobilePage = () => {
  return (
    <>
      <NavBar activePage={"none"} />

      <div className={"py-6 pl-2 pr-20"}>
        <Alert type={"danger"} text={"Creating OBS ingresses is not (yet) supported on mobile."} />
      </div>
    </>
  );
}

export default MobilePage