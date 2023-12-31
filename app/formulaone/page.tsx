import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import Alert from "../components/Alert";

const FormulaOnePage = () => {
  const number = (number: number) => {
    return (<td><div className="mr-2">{String(number)}</div></td>);
  }
  const flag = (country: string) => {
    return (<td><img src={"/formulaone/twemoji-flags/" + country + ".png"} className="h-[1rem] mr-2" /></td>);
  }
  const name = (name: string) => {
    return (<td><div className="mr-8">{name}</div></td>);
  }
  const image = (name: string) => {
    if (name == "f1") {
      return (<td><div className="mr-4 h-[1rem] inline-block"><img src={"/formulaone/f1web.png"} className="h-[1rem]" /></div></td>);
    } else if (name == "f1s") {
      return (<td><div className="mr-4 h-[1rem] inline-block">
        <img src={"/formulaone/f1-sprint-text-black.png"} className="h-[1rem] dark:hidden" />
        <img src={"/formulaone/f1-sprint-text-white.png"} className="h-[1rem] dark:!inline-block hidden" />
      </div></td>);
    } else if (name == "f2") {
      return (<td><div className="mr-4 h-[1rem] inline-block"><img src={"/formulaone/f2.png"} className="h-[1rem]" /></div></td>);
    } else if (name == "f3") {
      return (<td><div className="mr-4 h-[1rem] inline-block"><img src={"/formulaone/f3.png"} className="h-[1rem]" /></div></td>);
    } else if (name == "f1a") {
      return (<td><div className="h-[1rem] inline-block"><img src={"/formulaone/f1a.png"} className="h-[1rem]" /></div></td>);
    } else {
      return (<td><div>Image not found.</div></td>);
    }
  }
  return (
    <>
      <NavBar activePage="formulaone" />
      <Alert type="info" text="This page is still work in progress. It will be updated with more information and additional pages before the start of the Formula 1 2024 season." />
      <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-inherit py-1 px-4 pt-2 mx-12 my-4 grid">
        <p className="row-start-1 row-span-1 col-start-1 col-span-1 align-middle py-2">Car launch season is starting soon! Find more information on all announced car launches on our Car Launches page.</p>
        <a href="/formulaone/car-launches" className="rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min row-start-1 row-span-1 col-start-2 col-span-1 mx-4 align-middle mb-1 justify-self-end">Take me there!</a>
      </div>
      <Paragraph emoji="📅" title="2024 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR">
        <table className="table-fixed">
          <tbody>
            <tr>
              {number(0)}
              {flag("bahrain")}
              {name("FORMULA 1 ARAMCO PRE-SEASON TESTING 2024")}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              {number(1)}
              {flag("bahrain")}
              {name("FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(2)}
              {flag("saudi")}
              {name("FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              <td></td>
              {image("f1a")}
            </tr>
            <tr>
              {number(3)}
              {flag("australia")}
              {name("FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(4)}
              {flag("japan")}
              {name("FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024")}
              {image("f1")}
            </tr>
            <tr>
              {number(5)}
              {flag("china")}
              {name("FORMULA 1 LENOVO CHINESE GRAND PRIX 2024")}
              {image("f1s")}
            </tr>
            <tr>
              {number(6)}
              {flag("usa")}
              {name("FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024")}
              {image("f1s")}
              <td></td>
              <td></td>
              {image("f1a")}
            </tr>
            <tr>
              {number(7)}
              {flag("italy")}
              {name("FORMULA 1 MSC CRUISES GRAN PREMIO DELL'EMILIA-ROMAGNA 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(8)}
              {flag("monaco")}
              {name("FORMULA 1 GRAND PRIX DE MONACO 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(9)}
              {flag("canada")}
              {name("FORMULA 1 GRAND PRIX DU CANADA 2024")}
              {image("f1")}
            </tr>
            <tr>
              {number(10)}
              {flag("spain")}
              {name("FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
              {image("f1a")}
            </tr>
            <tr>
              {number(11)}
              {flag("austria")}
              {name("FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024")}
              {image("f1s")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(12)}
              {flag("uk")}
              {name("FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(13)}
              {flag("hungary")}
              {name("FORMULA 1 HUNGARIAN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(14)}
              {flag("belgium")}
              {name("FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(15)}
              {flag("netherlands")}
              {name("FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024")}
              {image("f1")}
              <td></td>
              <td></td>
              {image("f1a")}
            </tr>
            <tr>
              {number(16)}
              {flag("italy")}
              {name("FORMULA 1 PIRELLI GRAN PREMIO D'ITALIA 2024")}
              {image("f1")}
              {image("f2")}
              {image("f3")}
            </tr>
            <tr>
              {number(17)}
              {flag("azerbaijan")}
              {name("FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
            </tr>
            <tr>
              {number(18)}
              {flag("singapore")}
              {name("FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024")}
              {image("f1")}
              <td></td>
              <td></td>
              {image("f1a")}
            </tr>
            <tr>
              {number(19)}
              {flag("usa")}
              {name("FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024")}
              {image("f1s")}
            </tr>
            <tr>
              {number(20)}
              {flag("mexico")}
              {name("FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024")}
              {image("f1")}
            </tr>
            <tr>
              {number(21)}
              {flag("brazil")}
              {name("FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024")}
              {image("f1s")}
            </tr>
            <tr>
              {number(22)}
              {flag("usa")}
              {name("FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024")}
              {image("f1")}
            </tr>
            <tr>
              {number(23)}
              {flag("qatar")}
              {name("FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024")}
              {image("f1s")}
              {image("f2")}
              <td></td>
              {image("f1a")}
            </tr>
            <tr>
              {number(24)}
              {flag("uae")}
              {name("FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024")}
              {image("f1")}
              {image("f2")}
              <td></td>
              {image("f1a")}
            </tr>
          </tbody>
        </table>
      </Paragraph>
      <FooterBar />
    </>
  );
}

export default FormulaOnePage;