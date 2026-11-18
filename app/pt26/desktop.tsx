import Paragraph from "@/app/components/Paragraph";
import { Check, ExternalLink, LoaderCircle, ReceiptEuro, X } from "lucide-react";
import { useEffect, useState } from "react";
import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";

enum PayButtonState {
  "LOADING",
  "UNKNOWN_USER",
  "NO_USER_INFO",
  "YET_TO_PAY",
  "PAYED",
}

interface PaymentInfo {
  id: number,
  userId: number,
  payed: boolean,
  documentUrl: string,
}

const PortugalPage = () => {
  const [ payButtonState, setPayButtonState ] = useState<PayButtonState>(PayButtonState.LOADING);
  const [ paymentInfo, setPaymentInfo ] = useState<PaymentInfo | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/checkGuild`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status != 200) setPayButtonState(PayButtonState.UNKNOWN_USER);
        else {
          fetch(`/api/pt26/getPaymentInfo`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (!data.user) setPayButtonState(PayButtonState.UNKNOWN_USER);
              else if (data.paymentInfo == null) setPayButtonState(PayButtonState.NO_USER_INFO);
              else {
                setPaymentInfo(data.paymentInfo as PaymentInfo);
                setPayButtonState((data.paymentInfo as PaymentInfo).payed ? PayButtonState.PAYED : PayButtonState.YET_TO_PAY);
              }
            });
        }
      });
  }, []);

  /*useEffect(() => {
    console.log("Payment button state update", payButtonState);
  }, [payButtonState]);*/

  return (
    <>
      <NavBar activePage="pt26" />

      <Paragraph title={"General Information"}>
        <div className={"flex flex-row w-full h-fit min-h-10 my-2"}>
          <div className={"text-balance my-auto pr-4"}>
            You can find all general information in this document.
            Read at least the text marked in <div className={"inline bg-green-300 rounded-sm p-0.5 leading-none"}>green</div> (about EZVZ) and <div className={"inline bg-cyan-300 rounded-sm p-0.5 leading-none"}>blue</div> (all info for departure) as soon as possible.
            Do not download this document but rather read it online, as it will be updated repeatedly.
          </div>

          <button
            onClick={() => window.open("/pt-info.pdf", "_blank")}
            className={`bg-[#CFB53B] text-black rounded-md p-2 flex flex-row ${payButtonState != PayButtonState.UNKNOWN_USER && payButtonState != PayButtonState.LOADING ? "block" : "hidden"}`}
          >
            <div className={"block my-auto text-nowrap w-fit"}>Read general information</div>
            <ExternalLink className={"block my-auto ml-2"} />
          </button>

          <button
            onClick={() => window.open("/pt-info.pdf", "_blank")}
            className={`bg-[#CFB53B] text-black rounded-md p-2 flex flex-row ${payButtonState == PayButtonState.LOADING ? "block" : "hidden"}`}
          >
            <LoaderCircle className={"block my-auto mr-2 animate-spin"} />
            <div className={"block my-auto text-nowrap w-fit"}>Loading...</div>
          </button>

          <button
            disabled
            className={`bg-red-500 text-white rounded-md p-2 flex flex-row ${payButtonState == PayButtonState.UNKNOWN_USER ? "block" : "hidden"}`}
          >
            <X className={"block my-auto mr-2"} />
            <div className={"block my-auto text-nowrap w-fit"}>Please log in first</div>
          </button>
        </div>
      </Paragraph>

      <Paragraph title={"Payments"}>
        <div className={"flex flex-row w-full h-fit min-h-10 my-2"}>
          <a href={"https://spliit.app/groups/dJPtHhqvpN0L0aouoE5jA/expenses?ref=share"} target="_blank" className={"block w-1/2 py-2 h-fit my-auto text-center"}>
            <img
              className={"w-1/5 h-1/5 mx-auto p-4"}
              src="/logos/spliit/logo.svg"
            />
            <div className={"font-semibold text-lg"}>Spliit Debt Tracking</div>
            <div className={"text-balance"}>Link to our Spliit-groop. Spliit is a free alternative for Splitwise, to track expenses between each other during our trip. Spliit is available online (desktop or mobile) and in the Apple App Store for iOS.</div>
          </a>
          <div className={"block w-1/2 py-2 h-fit my-auto text-center"}>
            <div className={"font-semibold text-lg"}>Booking Costs</div>
            <div className={"text-balance"}>For the large sum of booking costs, I ask you to pay me back before we leave. If you&apos;re logged in, you can use the button underneath to see what you owe and why.</div>
            <button disabled className={`bg-[#CFB53B] text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.LOADING ? "block" : "hidden"}`}><LoaderCircle className={"mr-2 animate-spin inline-block"} />Loading...</button>
            <button disabled className={`bg-red-500 text-white rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.UNKNOWN_USER ? "block" : "hidden"}`}><X className={"mr-2 inline-block"} />Please log in first</button>
            <button disabled className={`bg-red-500 text-white rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.NO_USER_INFO ? "block" : "hidden"}`}><X className={"mr-2 inline-block"} />No payment info found</button>

            <button
              onClick={() => window.open(`/bills/pt26/${paymentInfo?.documentUrl}`, "_blank")}
              className={`bg-green-400 text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.PAYED ? "block" : "hidden"}`}
            >
              <Check className={"mr-2 inline-block"} />
              Payment received
            </button>

            <button
              onClick={() => window.open(`/bills/pt26/${paymentInfo?.documentUrl}`, "_blank")}
              className={`bg-[#CFB53B] text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.YET_TO_PAY ? "block" : "hidden"}`}
            >
              <ReceiptEuro className={"mr-2 inline-block"} />
              Check payment info
            </button>
          </div>
        </div>
      </Paragraph>

      <FooterBar />
    </>
  );
};

export default PortugalPage;
