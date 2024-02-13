type dataChildrenType = {
  imgPath: string;
  title: string;
  link: string | undefined;
  date: string;
  time: string;
  description: string;
  eventUrl: string;
};
type dataType = {
  haas: dataChildrenType;
  williams: dataChildrenType;
  kick: dataChildrenType;
  alpine: dataChildrenType;
  racingbulls: dataChildrenType;
  aston: dataChildrenType;
  ferrari: dataChildrenType;
  mercedes: dataChildrenType;
  mclaren: dataChildrenType;
  redbull: dataChildrenType;
  none: dataChildrenType;
};

interface ModalProps {
  activeModal: keyof dataType;
  setModalFunction: any;
}
const Modal = ({ activeModal, setModalFunction }: ModalProps) => {
  const data: dataType = {
    haas: {
      imgPath: "/formulaone/car-launches/Haas24.png",
      title: "Haas VF24 Car Launch",
      link: "https://www.youtube.com/watch?v=oEMi8g9-ypE",
      date: "Friday February 2 2024",
      time: "15:00 CET",
      description: "Moneygram Haas has announced they will launch their 2024 car - the VF24 - on Friday February 2 2024 at 15:00 CET.",
      eventUrl: "https://discord.com/events/585896430380777503/1201869090655064094",
    },
    williams: {
      imgPath: "/formulaone/car-launches/Williams24.png",
      title: "Williams FW46 Car Launch",
      link: "https://www.williamsf1.com/",
      date: "Monday February 5 2024",
      time: "15:40 CET",
      description: "Williams Racing has announced they will launch their 2024 car - the FW46 - on Monday February 5 at 15:40 CET in New York City.",
      eventUrl: "https://discord.com/events/585896430380777503/1190757961086279834",
    },
    kick: {
      imgPath: "/formulaone/car-launches/Kick24.png",
      title: "Kick C44 Car Launch",
      link: "https://kick.com/stakef1team",
      date: "Monday February 5 2024",
      time: "20:00 CET",
      description: "Kick Sauber (what used to be Alfa Romeo Racing) has announced they will launch their 2024 car - the C44 - on Monday February 5 at 20:00 CET in the United Kingdom.",
      eventUrl: "https://discord.com/events/585896430380777503/1190758263013253303",
    },
    alpine: {
      imgPath: "/formulaone/car-launches/Alpine24.png",
      title: "Alpine A524 Car Launch",
      link: "https://www.youtube.com/watch?v=u-Qvvyj8n1I",
      date: "Wednesday February 7 2024",
      time: "14:30 CET",
      description: "BWT Alpine has announced they will launch their 2024 car - the A524 - on Wednesday February 7 at 14:30 CET. They will also reveal their A424 LMDh with which they will compete in FIA WEC.",
      eventUrl: "https://discord.com/events/585896430380777503/1190758568295682228",
    },
    racingbulls: {
      imgPath: "/formulaone/car-launches/RacingBulls24.png",
      title: "Racing Bulls 2024 Car Launch",
      link: undefined,
      date: "Friday February 9 2024",
      time: "07:15 CET",
      description: "Racing Bulls (what used to be Scuderia AlphaTauri) has announced they will launch their 2024 car on Friday February 9 at 07:15 CET in Las Vegas.",
      eventUrl: "https://discord.com/events/585896430380777503/1201868256332218368",
    },
    aston: {
      imgPath: "/formulaone/car-launches/AstonMartin24.png",
      title: "Aston Martin AMR24 Car Launch",
      link: "https://www.youtube.com/watch?v=vbg2IaCLXF4",
      date: "Monday February 12 2024",
      time: "09:00 CET",
      description: "Aston Martin Aramco has announced they will launch their 2024 car - the AMR24 - on Monday February 12 at 09:00 CET.",
      eventUrl: "https://discord.com/events/585896430380777503/1192192200184963173",
    },
    ferrari: {
      imgPath: "/formulaone/car-launches/Ferrari24.png",
      title: "Ferrari 2024 Car Launch",
      link: "https://www.youtube.com/watch?v=04TsqI1lUV8",
      date: "Tuesday February 13 2024",
      time: "12:00 CET",
      description: "Scuderia Ferrari has announced they will launch their 2024 car on Tuesday February 13 at 12:00 CET.",
      eventUrl: "https://discord.com/events/585896430380777503/1190758782607839283",
    },
    mercedes: {
      imgPath: "/formulaone/car-launches/Mercedes24.png",
      title: "Mercedes W15 Car Launch",
      link: undefined,
      date: "Wednesday February 14 2024",
      time: "The time of the event is yet to be announced.",
      description: "Mercedes-AMG Petronas has announced they will launch their 2024 car - the W15 - on Wednesday February 14.",
      eventUrl: "https://discord.com/events/585896430380777503/1190759009477730375",
    },
    mclaren: {
      imgPath: "/formulaone/car-launches/McLaren24.png",
      title: "McLaren 2024 Car Launch",
      link: undefined,
      date: "Wednesday February 14 2024",
      time: "The time of the event is yet to be announced.",
      description: "McLaren has announced they will launch their 2024 car on Wednesday February 14.",
      eventUrl: "https://discord.com/events/585896430380777503/1190759249064759397",
    },
    redbull: {
      imgPath: "/formulaone/car-launches/RedBull24.png",
      title: "Red Bull RB20 Car Launch",
      link: undefined,
      date: "Thursday February 15 2024",
      time: "The time of the event is yet to be announced.",
      description: "Oracle Red Bull has announced they will launch their 2024 car - the RB20 - on Thursday February 15",
      eventUrl: "https://discord.com/events/585896430380777503/1197210064528883825",
    },
    none: {
      imgPath: "",
      title: "",
      link: undefined,
      date: "",
      time: "",
      description: "",
      eventUrl: "",
    },
  };
  const setModal = () => {
    setModalFunction("none");
  };
  return (
    <div className="w-[40vw] h-[75vh] fixed z-50 bg-[#D6D6D6] dark:bg-[#1E1E1E] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] grid grid-rows-[auto_1fr]">
      <button onClick={setModal} className="fixed right-4 top-2 text-xl text-gray-400">
        ✕
      </button>
      <img src={data[activeModal]["imgPath"]} className="row-start-1 row-span-1 col-start-1 col-span-1" />
      <div className="p-4 relative row-start-2 row-span-1 col-start-1 col-span-1">
        <h1 className="text-[#1E1E1E] dark:text-[#FFFFFF] text-2xl font-medium mb-2">{data[activeModal]["title"]}</h1>
        <p className="text-[#1E1E1E] dark:text-[#FFFFFF] text-sm">{data[activeModal]["link"] ? <a href={data[activeModal]["link"]}>{"🔗 " + data[activeModal]["link"]}</a> : "🔗 Live stream URL following later."}</p>
        <p className="text-[#1E1E1E] dark:text-[#FFFFFF] text-sm">{"📅 " + data[activeModal]["date"]}</p>
        <p className="text-[#1E1E1E] dark:text-[#FFFFFF] text-sm mb-2">{"⏰ " + data[activeModal]["time"]}</p>
        <p className="text-[#1E1E1E] dark:text-[#FFFFFF]">{data[activeModal]["description"]}</p>
        <a href={data[activeModal]["eventUrl"]} target="_blank" className="rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min absolute bottom-4">
          RSVP on Discord!
        </a>
      </div>
    </div>
  );
};

export default Modal;
export type { dataType };
