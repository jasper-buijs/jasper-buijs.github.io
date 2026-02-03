/* eslint-disable @next/next/no-img-element */
"use client";

import { CalendarEmblems } from "@/app/components/mobile/formulaone/CalendarEmblems";
import NavBar from "@/app/components/mobile/NavBar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="py-6 pl-2 pr-20">
        {/*<Alert type={"info"} text={"Because of technical challenges, it has been difficult to populate the formula 1 pages with meaningful data throughout the season. Some of these challenges have been fixed, with a system now in place to automatically add results data to the pages when posting them to Discord. However, as there is no way to retroactively add data from past grand prix, we won't be using this system until the start of the 2026 season. For now, you can use this page as a season calendar (which we don't actually have in discord), but for any additional information and results, check the #results channel in Discord."} />*/}
        <div className="grid grid-cols-1 auto-rows-max w-full mb-2">
          {/*PRE-SEASON TESTING 1*/ }
          <Link href="/formulaone/races/pst1"
            className="w-full h-28 relative row-start-1 row-span-1 col-start-1 col-span-1">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-1 bottom-2 left-1 top-3 py-2 pl-2 rounded-md`}>
              <p className="block text-white font-semibold text-lg truncate max-w-[calc(100%-15px)]">BARCELONA SHAKEDOWN</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Barcelona-Catalunya</p>
              <p className="inline-block text-white mr-3">Jan 26 - 30</p>
            </div>
          </Link>

          {/*PRE-SEASON TESTING 2*/ }
          <Link href="/formulaone/races/pst2"
            className="w-full h-[6.25rem] relative row-start-2 row-span-1 col-start-1 col-span-1">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-1 bottom-2 left-1 top-0 py-2 pl-2 rounded-md`}>
              <p className="block text-white font-semibold text-lg truncate max-w-[calc(100%-15px)]">PRE-SEASON TESTING 1</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Feb 11 - 13</p>
            </div>
          </Link>

          {/*PRE-SEASON TESTING 3*/ }
          <Link href="/formulaone/races/pst3"
            className="w-full h-[6.25rem] relative row-start-3 row-span-1 col-start-1 col-span-1">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-1 bottom-2 left-1 top-0 py-2 pl-2 rounded-md`}>
              <p className="block text-white font-semibold text-lg truncate max-w-[calc(100%-15px)]">PRE-SEASON TESTING 2</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Feb 18 - 20</p>
            </div>
          </Link>

          {/*AUSTRALIA GP*/}
          <Link href="/formulaone/races/australia"
            className="w-full h-28 relative row-start-4 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#023874] to-[#7CAADC] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 1</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Albert Park Circuit</p>
              <p className="inline-block text-white mr-3">Mar 6 - 8</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*CHINESE GP*/}
          <Link href="/formulaone/races/china"
            className="w-full h-28 relative row-start-5 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EE1C25] to-[#FFE700] from-50% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 2</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CHINESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Shanghai International Circuit</p>
              <p className="inline-block text-white mr-3">Mar 13 - 15</p>
              <CalendarEmblems sprint f1a />
            </div>
          </Link>

          {/*JAPAN GP*/}
          <Link href="/formulaone/races/japan"
            className="w-full h-28 relative row-start-6 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#BD022F] to-[#FF5782] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 3</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">JAPANESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Suzuka International Racing Course</p>
              <p className="inline-block text-white mr-3">Mar 27 - 29</p>
            </div>
          </Link>

          {/*BAHRAIN GP*/}
          <Link href="/formulaone/races/bahrain"
            className="w-full h-28 relative row-start-7 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E40A18] from-50% to-[#FFFFFF] absolute brightness-[80%] right-1 bottom-2 left-1 top-0 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 4</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BAHRAIN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Apr 10 - 12</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*SAUDI ARABIA GP*/}
          <Link href="/formulaone/races/saudi-arabia"
            className="w-full h-28 relative row-start-8 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#016C36] to-[#66C698] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 5</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SAUDI ARABIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Jeddah Corniche Circuit</p>
              <p className="inline-block text-white mr-3">Apr 17 - 19</p>
              <CalendarEmblems f2 f1a />
            </div>
          </Link>

          {/*MIAMI GP*/}
          <Link href={"/formulaone/races/miami"}
            className="w-full h-28 relative row-start-9 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 6</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MIAMI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Miami International Autodrome</p>
              <p className="inline-block text-white mr-3">May 1 - 3</p>
              <CalendarEmblems sprint />
            </div>
          </Link>

          {/*CANADA GP*/}
          <Link href={"/formulaone/races/canada"}
            className="w-full h-28 relative row-start-10 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EA2C36] from-50% to-95% to-[#FFFFFF] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 7</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CANADIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Gilles-Villeneuve</p>
              <p className="inline-block text-white mr-3">May 22 - 24</p>
              <CalendarEmblems sprint f1a />
            </div>
          </Link>

          {/*MONACO GP*/}
          <Link href={"/formulaone/races/monaco"}
            className="w-full h-28 relative row-start-11 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E50915] from-30% to-[#FFFFFF] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 8</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MONACO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Monaco</p>
              <p className="inline-block text-white mr-3">Jun 5 - 7</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*BARCELONA GP*/}
          <Link href="/formulaone/races/spain"
            className="w-full h-28 relative row-start-12 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FABD00] from-60% to-[#E20612] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 9</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BARCELONA GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Barcelona-Catalunya</p>
              <p className="inline-block text-white mr-3">Jun 12 - 14</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*AUSTRIA GP*/}
          <Link href="/formulaone/races/austria"
            className="w-full h-28 relative row-start-13 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C80F2E] to-[#FF3E5D] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 10</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Red Bull Ring</p>
              <p className="inline-block text-white mr-3">Jun 26 - 28</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*UK GP*/}
          <Link href="/formulaone/races/great-britain"
            className="w-full h-28 relative row-start-[14] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C7102E] to-[#032169] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 11</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BRITISH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Silverstone Circuit</p>
              <p className="inline-block text-white mr-3">Jul 3 - 5</p>
              <CalendarEmblems sprint f2 f3 f1a />
            </div>
          </Link>

          {/*BELGIUM GP*/}
          <Link href="/formulaone/races/belgium"
            className="w-full h-28 relative row-start-[15] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#030301] to-[#EB0917] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 12</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BELGIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Spa-Francorchamps</p>
              <p className="inline-block text-white mr-3">Jul 17 - 19</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*HUNGARY GP*/}
          <Link href="/formulaone/races/hungary"
            className="w-full h-28 relative row-start-[16] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EB0917] to-[#349D32] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 13</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">HUNGARIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Hungaroring</p>
              <p className="inline-block text-white mr-3">Jul 24 - 26</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*NETHERLANDS GP*/}
          <Link href="/formulaone/races/netherlands"
            className="w-full h-28 relative row-start-[17] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FF8113] to-[#04529A] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 14</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">DUTCH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Zandvoort</p>
              <p className="inline-block text-white mr-3">Aug 21 - 23</p>
              <CalendarEmblems sprint f1a />
            </div>
          </Link>

          {/*ITALY GP*/}
          <Link href="/formulaone/races/italy"
            className="w-full h-28 relative row-start-[18] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#048B46] to-[#CC222B] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 15</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ITALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autodromo Nazionale Monza</p>
              <p className="inline-block text-white mr-3">Sep 4 - 6</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*SPAIN GP*/}
          <Link href="/formulaone/races/spain"
            className="w-full h-28 relative row-start-[19] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E20612] from-50% to-85% to-[#FABD00] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 16</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SPAIN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuito de Madring</p>
              <p className="inline-block text-white mr-3">Sep 11 - 13</p>
              <CalendarEmblems f2 f3 />
            </div>
          </Link>

          {/*AZERBAIJAN GP*/}
          <Link href="/formulaone/races/azerbaijan"
            className="w-full h-28 relative row-start-[20] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#00B5E2] to-[#4F9F30] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 17</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AZERBAIJAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Baku City Circuit</p>
              <p className="inline-block text-white mr-3">Sep 24 - 26</p>
              <CalendarEmblems f2 />
            </div>
          </Link>

          {/*SINGAPORE GP*/}
          <Link href="/formulaone/races/singapore"
            className="w-full h-28 relative row-start-[21] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E10E0E] to-[#FFFFFF] from-65% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 18</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SINGAPORE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Marina Bay Street Circuit</p>
              <p className="inline-block text-white mr-3">Oct 9 - 11</p>
              <CalendarEmblems sprint />
            </div>
          </Link>

          {/*USA GP*/}
          <Link href="/formulaone/races/united-states"
            className="w-full h-28 relative row-start-[22] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#2112D9] to-[#DD0B26] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 19</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">UNITED STATES GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit of The Americas</p>
              <p className="inline-block text-white mr-3">Oct 23 - 25</p>
              <CalendarEmblems f1a />
            </div>
          </Link>

          {/*MEXICO GP*/}
          <Link href="/formulaone/races/mexico"
            className="w-full h-28 relative row-start-[23] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#039542] to-[#E10813] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 20</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MEXICO CITY GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo Hermanos Rodríguez</p>
              <p className="inline-block text-white mr-3">Oct 30 - Nov 1</p>
            </div>
          </Link>

          {/*BRAZIL GP*/}
          <Link href="/formulaone/races/brazil"
            className="w-full h-28 relative row-start-[24] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#029739] to-[#FCDC00] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 21</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SÃO PAULO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo de Interlagos</p>
              <p className="inline-block text-white mr-3">Nov 6 - 8</p>
            </div>
          </Link>

          {/*VEGAS GP*/}
          <Link href="/formulaone/races/las-vegas"
            className="w-full h-28 relative row-start-[25] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#0198A3] via-[#22142B] via-65 to-[#571060] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 22</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">LAS VEGAS GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Las Vegas Strip Circuit</p>
              <p className="inline-block text-white mr-3">Nov 19 - 21</p>
              <CalendarEmblems f1a />
            </div>
          </Link>

          {/*QATAR GP*/}
          <Link href="/formulaone/races/qatar"
            className="w-full h-28 relative row-start-[26] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#8A1639] to-[#FFFFFF] from-70% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 23</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">QATAR GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Lusail International Circuit</p>
              <p className="inline-block text-white mr-3">Nov 27 - 29</p>
              <CalendarEmblems f2 />
            </div>
          </Link>

          {/*UAE GP*/}
          <Link href="/formulaone/races/abu-dhabi"
            className="w-full h-28 relative row-start-[27] row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FD0002] via-[#01823F] to-[#000000] from-20% via-60% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 24</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ABU DHABI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Yas Marina Circuit</p>
              <p className="inline-block text-white mr-3">Dec 4 - 6</p>
              <CalendarEmblems f2 />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
