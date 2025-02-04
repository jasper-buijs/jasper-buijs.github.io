/* eslint-disable @next/next/no-img-element */
"use client";

import FooterBar from "../components/FooterBar";
import NavBar from "../components/NavBar";
import Paragraph from "../components/Paragraph";
import { CalendarGrid, CalendarEmblems } from "../components/formulaone/CalendarGrid";

const FormulaOnePage = () => {
  return (
    <>
      <NavBar activePage="formulaone" />
      {/*<Paragraph title="FORMULA ONE WORLD DRIVERS' CHAMPIONSHIP" emoji="🏆">
        <Drivers />
      </Paragraph>*/}
      <Paragraph title="2025 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR" emoji="📅">
        <CalendarGrid>
          {/*PRE-SEASON TESTING*/ }
          <a href="/formulaone/races/pst"
             className="w-full h-32 relative row-start-1 row-span-1 col-start-1 col-span-2">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-4 pl-5 rounded-lg`}>
              <p className="block text-white font-semibold text-lg">FORMULA 1 ARAMCO PRE-SEASON TESTING 2025</p>
              <p className="block text-white">Bahrain International Circuit, Sakhir, Bahrain</p>
              <p className="inline-block text-white mr-3">Feb 26 - 28</p>
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png" />
          </a>
          {/*AUSTRALIA GP*/}
          <a href="/formulaone/races/australia" className="w-full h-32 relative row-start-2 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#023874] to-[#7CAADC] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 1</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Albert Park Circuit, Melbourne, Australia</p>
              <p className="inline-block text-white mr-3">Mar 14 - 16</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png" />
          </a>
          {/*CHINESE GP*/}
          <a href="/formulaone/races/china" className="w-full h-32 relative row-start-2 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#EE1C25] to-[#FFFF00] from-50% absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 2</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Shanghai International Circuit, Shanghai, China</p>
              <p className="inline-block text-white mr-3">Mar 21 - 23</p>
              <CalendarEmblems sprint f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/China%20carbon.png" />
          </a>
          {/*JAPAN GP*/}
          <a href="/formulaone/races/japan" className="w-full h-32 relative row-start-3 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#BD022F] to-[#FF5782] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 3</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 LENOVO JAPANESE GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Suzuka International Racing Course, Suzuka, Japan</p>
              <p className="inline-block text-white mr-3">Apr 4 - 6</p>
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png" />
          </a>
          {/*BAHRAIN GP*/}
          <a href="/formulaone/races/bahrain" className="w-full h-32 relative row-start-3 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#E40A18] from-50% to-[#FFFFFF] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 4</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 BAHRAIN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Bahrain International Circuit, Sakhir, Bahrain</p>
              <p className="inline-block text-white mr-3">Apr 11 - 13</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png" />
          </a>
          {/*SAUDI ARABIA GP*/}
          <a href="/formulaone/races/saudi-arabia" className="w-full h-32 relative row-start-4 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#016C36] to-[#66C698] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 5</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Jeddah Corniche Circuit, Jeddah, Saudi Arabia</p>
              <p className="inline-block text-white mr-3">Apr 18 - 20</p>
              <CalendarEmblems f2 f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png" />
          </a>
          {/*MIAMI GP*/}
          <a href={"/formulaone/races/miami"} className="w-full h-32 relative row-start-4 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 6</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Miami International Autodrome, Florida, United States</p>
              <p className="inline-block text-white mr-3">May 2 - 4</p>
              <CalendarEmblems sprint f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png" />
          </a>
          {/*IMOLA GP*/}
          <a href={"/formulaone/races/imola"} className="w-full h-32 relative row-start-5 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#37AC37] to-[#175C19] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 7</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 AWS GRAN PREMIO DEL MADE IN ITALY E DELL&apos;EMILIA-ROMAGNA 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Autodromo Enzo e Dino Ferrari, Emilia-Romagna, Italy</p>
              <p className="inline-block text-white mr-3">May 16 - 18</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1684338005/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png" />
          </a>
          {/*MONACO GP*/}
          <a href={"/formulaone/races/monaco"} className="w-full h-32 relative row-start-5 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#E50915] to-[#FFFFFF] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 8</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 GRAND PRIX DE MONACO 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit de Monaco, Monte-Carlo, Monaco</p>
              <p className="inline-block text-white mr-3">May 23 - 25</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png" />
          </a>
          {/*SPAIN GP*/}
          <a href="/formulaone/races/spain" className="w-full h-32 relative row-start-6 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E20612] from-50% to-85% to-[#FABD00] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 9</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit de Barcelona-Catalunya, Catalonia, Spain</p>
              <p className="inline-block text-white mr-3">May 30 - Jun 1</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1680529432/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png" />
          </a>
          {/*CANADA GP*/}
          <a href="/formulaone/races/canada" className="w-full h-32 relative row-start-6 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#EA2C36] from-50% to-85% to-[#FFFFFF] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 10</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit Gilles-Villeneuve, Montreal, Canada</p>
              <p className="inline-block text-white mr-3">Jun 13 - 15</p>
              <CalendarEmblems f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png" />
          </a>
          {/*AUSTRIA GP*/}
          <a href="/formulaone/races/austria" className="w-full h-32 relative row-start-7 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C80F2E] to-[#FF3E5D] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 11</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Red Bull Ring, Styria, Austria</p>
              <p className="inline-block text-white mr-3">Jun 27 - 29</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png" />
          </a>
          {/*UK GP*/}
          <a href="formulaone/races/great-britain" className="w-full h-32 relative row-start-7 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#C7102E] to-[#032169] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 12</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Silverstone Circuit, Northamptonshire, United Kingdom</p>
              <p className="inline-block text-white mr-3">Jul 4 - 6</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png" />
          </a>
          {/*BELGIUM GP*/}
          <a href="formulaone/races/belgium" className="w-full h-32 relative row-start-8 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#030301] to-[#eb0917] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 13</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 BELGIAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit de Spa-Francorchamps, Stavelot, Belgium</p>
              <p className="inline-block text-white mr-3">Jul 25 - 27</p>
              <CalendarEmblems sprint f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png" />
          </a>
          {/*HUNGARY GP*/}
          <a href="formulaone/races/hungary" className="w-full h-32 relative row-start-8 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#eb0917] to-[#349d32] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 14</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 LENOVO HUNGARIAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Hungaroring, Mogyoród, Hungary</p>
              <p className="inline-block text-white mr-3">Aug 1 - 3</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png" />
          </a>
          {/*NETHERLANDS GP*/}
          <a href="formulaone/races/netherlands" className="w-full h-32 relative row-start-9 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#ff8113] to-[#04529A] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 15</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit Zandvoort, North Holland, Netherlands</p>
              <p className="inline-block text-white mr-3">Aug 29 - 31</p>
              <CalendarEmblems f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245033/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png" />
          </a>
          {/*ITALY GP*/}
          <a href="formulaone/races/italy" className="w-full h-32 relative row-start-9 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#048B46] to-[#CC222B] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 16</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 PIRELLI GRAN PREMIO D&apos;ITALIA 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Autodromo Nazionale Monza, Monza, Italy</p>
              <p className="inline-block text-white mr-3">Sep 5 - 7</p>
              <CalendarEmblems f2 f3 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png" />
          </a>
          {/*AZERBAIJAN GP*/}
          <a href="formulaone/races/azerbaijan" className="w-full h-32 relative row-start-10 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#00B5E2] to-[#4F9F30] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 17</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Baku City Circuit, Baku, Azerbaijan</p>
              <p className="inline-block text-white mr-3">Sep 19 - 21</p>
              <CalendarEmblems f2 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png" />
          </a>
          {/*SINGAPORE GP*/}
          <a href="formulaone/races/singapore" className="w-full h-32 relative row-start-10 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#e10e0e] to-[#FFFFFF] from-65% absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 18</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Marina Bay Street Circuit, Singapore</p>
              <p className="inline-block text-white mr-3">Oct 3 - 5</p>
              <CalendarEmblems f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1683639275/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png" />
          </a>
          {/*USA GP*/}
          <a href="formulaone/races/united-states" className="w-full h-32 relative row-start-11 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#2112d9] to-[#dd0b26] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 19</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 MSC CRUISES UNITED STATES GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Circuit of The Americas, Texas, United States</p>
              <p className="inline-block text-white mr-3">Oct 17 - 19</p>
              <CalendarEmblems sprint />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon.png" />
          </a>
          {/*MEXICO GP*/}
          <a href="formulaone/races/mexico" className="w-full h-32 relative row-start-11 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#039542] to-[#E10813] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 20</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Autódromo Hermanos Rodríguez, Mexico City, Mexico</p>
              <p className="inline-block text-white mr-3">Oct 24 - 26</p>
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png" />
          </a>
          {/*BRAZIL GP*/}
          <a href="formulaone/races/brazil" className="w-full h-32 relative row-start-12 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#029739] to-[#FCDC00] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 21</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Autódromo de Interlagos, São Paulo, Brazil</p>
              <p className="inline-block text-white mr-3">Nov 7 - 9</p>
              <CalendarEmblems sprint />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png" />
          </a>
          {/*VEGAS GP*/}
          <a href="formulaone/races/las-vegas" className="w-full h-32 relative row-start-12 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#0198A3] via-[#22142B] via-65 to-[#571060] absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 22</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Las Vegas Strip Circuit, Nevada, United States</p>
              <p className="inline-block text-white mr-3">Nov 20 - 22</p>
              <CalendarEmblems f1a />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677249931/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon.png" />
          </a>
          {/*QATAR GP*/}
          <a href="formulaone/races/qatar" className="w-full h-32 relative row-start-13 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#8A1639] to-[#FFFFFF] from-70% absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 23</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Lusail International Circuit, Lusail, Qatar</p>
              <p className="inline-block text-white mr-3">Nov 28 - 30</p>
              <CalendarEmblems sprint f2 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon.png" />
          </a>
          {/*UAE GP*/}
          <a href="formulaone/races/abu-dhabi" className="w-full h-32 relative row-start-13 row-span-1 col-start-2 col-span-1">
            <div className={`bg-gradient-to-r from-[#FD0002] via-[#01823F] to-[#000000] from-20% via-60% absolute brightness-[80%] right-2 top-2 bottom-2 left-2 pt-3 pl-5 rounded-lg`}>
              <p className="block text-white text-sm italic">ROUND 24</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-135px)]">FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2025</p>
              <p className="block text-white truncate max-w-[calc(100%-135px)]">Yas Marina Circuit, Abu Dhabi, United Arab Emirates</p>
              <p className="inline-block text-white mr-3">Dec 5 - 7</p>
              <CalendarEmblems f2 />
            </div>
            <img className="block absolute right-6 top-6 bottom-6 h-20 z-10" src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png" />
          </a>
        </CalendarGrid>
      </Paragraph>
      <Paragraph title={"Useful links and pages"} emoji={"🔗"}>
        <div className={"h-min mb-2"}>
          <a
            className={"rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min mx-1 align-middle mb-1 justify-self-end"}
            href={"/formulaone/penalty-points"}
          >
            Penalty Points
          </a>
          <a
            className={"rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min mx-1 align-middle mb-1 justify-self-end"}
            href={"/formulaone/regulations/F1-SR"}
          >
            F1 Sporting Regulations
          </a>
          <a
            className={"rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min mx-1 align-middle mb-1 justify-self-end"}
            href={"/formulaone/regulations/F1-TR"}
          >
            F1 Technical Regulations
          </a>
          <a
            className={"rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min mx-1 align-middle mb-1 justify-self-end"}
            href={"/formulaone/regulations/F1-FR"}
          >
            F1 Financial Regulations
          </a>
          <a
            className={"rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min mx-1 align-middle mb-1 justify-self-end"}
            href={"https://www.fia.com/regulation/category/123"}
            target={"_blank"}
          >
            FIA ISC and Appendices ↗
          </a>
        </div>
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default FormulaOnePage;
