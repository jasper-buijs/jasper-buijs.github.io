import Alert from "@/app/components/mobile/Alert";
import NavBar from "@/app/components/mobile/NavBar";

interface MobilePageProps {
  roomName: string;
  serverUrl: string;
}
export default function MobilePage({
  roomName,
  serverUrl,
}: MobilePageProps) {
  return (
    <>
      <NavBar activePage={"none"} />

      <div className={"py-6 pl-2 pr-20"}>
        <Alert type={"danger"} text={"This page is not (yet?) supported on mobile."} />
      </div>
    </>
  );
}