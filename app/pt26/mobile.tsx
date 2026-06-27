/* eslint-disable @next/next/no-img-element */
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import { Check, ExternalLink, LoaderCircle, ReceiptEuro, X } from "lucide-react";
import { useEffect, useState } from "react";

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

const Home = () => {
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

  return (<>
  <NavBar activePage="pt26" />
  <div className="py-6 pl-2 pr-20">
    <Paragraph title={"General Information"}>
      <div className={"flex flex-col w-full h-fit min-h-10 mb-2 text-center"}>
        <div className={"text-balance"}>
          You can find all general information in this document.
          Read at least the <div className={"inline bg-green-300 rounded-sm p-0.5 leading-none"}>green</div> marked text as soon as possible.
          Do not download this document but rather read it online, as it will be updated in the coming months.
        </div>

        <button
          onClick={() => window.open("/pt-info.pdf")}
          className={`bg-[#CFB53B] text-black rounded-md p-2 mt-4 mx-auto w-fit ${payButtonState != PayButtonState.UNKNOWN_USER && payButtonState != PayButtonState.LOADING ? "block" : "hidden"}`}
        >
          <div className={"block text-balance"}>Read general information</div>
        </button>

        <button
          onClick={() => window.open("/pt-info.pdf")}
          className={`bg-[#CFB53B] text-black rounded-md p-2 mt-4 mx-auto w-fit ${payButtonState == PayButtonState.LOADING ? "block" : "hidden"}`}
        >
          <LoaderCircle className={"mr-2 animate-spin inline-block"} />
          <div className={"inline-block text-balance"}>Read general information</div>
        </button>

        <button
          disabled
          className={`bg-red-500 text-white rounded-md p-2 mt-4 mx-auto w-fit ${payButtonState == PayButtonState.UNKNOWN_USER ? "block" : "hidden"}`}
        >
          <X className={"mr-2 inline-block"} />
          <div className={"inline-block text-balance"}>Please log in first</div>
        </button>
      </div>
    </Paragraph>

    <Paragraph title={"Payments"}>
      <div className={"flex flex-col w-full h-fit min-h-10 my-2"}>
        <div className={"block h-fit text-center"}>
          <img
            className={"w-1/3 h-1/3 mx-auto p-2"}
            src="/logos/spliit/logo.svg"
          />
          <div className={"font-semibold text-lg"}>Spliit Debt Tracking</div>
          <div className={"text-balance"}>Link to our Spliit-groop. Spliit is a free alternative for Splitwise, to track expenses between each other during our trip. Spliit is available online (desktop or mobile) and in the Apple App Store for iOS.</div>
          <button
            disabled
            onClick={() => window.open("https://spliit.app/groups/dJPtHhqvpN0L0aouoE5jA/expenses?ref=share")}
            className={`bg-[#CFB53B] text-black rounded-md p-2 mx-auto mt-4`}
          >
            Open Spliit
          </button>
        </div>
        <hr className={"h-px my-6 bg-gray-600 border-0"} />
        <div className={"block h-fit text-center"}>
          <div className={"font-semibold text-lg"}>Booking Costs</div>
          <div className={"text-balance"}>For the large sum of booking costs, I ask you to pay me back before we leave. If you&apos;re logged in, you can use the button underneath to see what you owe and why.</div>
          <button disabled className={`bg-[#CFB53B] text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.LOADING ? "block" : "hidden"}`}><LoaderCircle className={"mr-2 animate-spin inline-block"} />Loading...</button>
          <button disabled className={`bg-red-500 text-white rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.UNKNOWN_USER ? "block" : "hidden"}`}><X className={"mr-2 inline-block"} />Please log in first</button>
          <button disabled className={`bg-red-500 text-white rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.NO_USER_INFO ? "block" : "hidden"}`}><X className={"mr-2 inline-block"} />No payment info found</button>

          <button
            onClick={() => window.open(`/bills/pt26/${paymentInfo?.documentUrl}`)}
            className={`bg-green-400 text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.PAYED ? "block" : "hidden"}`}
          >
            <Check className={"mr-2 inline-block"} />
            Payment received
          </button>

          <button
            onClick={() => window.open(`/bills/pt26/${paymentInfo?.documentUrl}`)}
            className={`bg-[#CFB53B] text-black rounded-md p-2 mx-auto mt-4 ${payButtonState == PayButtonState.YET_TO_PAY ? "block" : "hidden"}`}
          >
            <ReceiptEuro className={"mr-2 inline-block"} />
            Check payment info
          </button>
        </div>
      </div>
    </Paragraph>
  </div>
</>)
  ;
};

export default Home;
