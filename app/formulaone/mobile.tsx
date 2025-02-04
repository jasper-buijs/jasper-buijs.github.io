/* eslint-disable @next/next/no-img-element */
"use client";

import { CalendarEmblems } from "@/app/components/mobile/formulaone/CalendarEmblems";
import NavBar from "@/app/components/mobile/NavBar";

const Home = () => {
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="py-6 pl-2 pr-20">
        <div className="grid grid-cols-1 auto-rows-fr w-full mb-2">
          {/*PRE-SEASON TESTING*/ }
          <a href="/formulaone/races/pst"
            className="w-full h-28 relative row-start-1 row-span-1 col-start-1 col-span-1">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-1 bottom-2 left-1 top-3 py-2 pl-2 rounded-md`}>
              <p className="block text-white font-semibold text-lg">PRE-SEASON TESTING</p>
              <p className="block text-white">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Feb 26 - 28</p>
            </div>
          </a>

          {/*AUSTRALIA GP*/}
          <a href="/formulaone/races/australia"
            className="w-full h-28 relative row-start-2 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#023874] to-[#7CAADC] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 1</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Albert Park Circuit</p>
              <p className="inline-block text-white mr-3">Mar 14 - 16</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*CHINESE GP*/}
          <a href="/formulaone/races/china"
            className="w-full h-28 relative row-start-3 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EE1C25] to-[#FFFF00] from-50% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 2</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CHINESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Shanghai International Circuit</p>
              <p className="inline-block text-white mr-3">Mar 21 - 23</p>
              <CalendarEmblems sprint f1a />
            </div>
          </a>

          {/*JAPAN GP*/}
          <a href="/formulaone/races/japan"
            className="w-full h-28 relative row-start-4 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#BD022F] to-[#FF5782] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 3</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">JAPANESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Suzuka International Racing Course</p>
              <p className="inline-block text-white mr-3">Apr 4 - 6</p>
            </div>
          </a>

          {/*BAHRAIN GP*/}
          <a href="/formulaone/races/bahrain"
            className="w-full h-28 relative row-start-5 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E40A18] from-50% to-[#FFFFFF] absolute brightness-[80%] right-1 bottom-2 left-1 top-0 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 4</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BAHRAIN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Apr 11 - 13</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*SAUDI ARABIA GP*/}
          <a href="/formulaone/races/saudi-arabia"
            className="w-full h-28 relative row-start-6 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#016C36] to-[#66C698] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 5</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SAUDI ARABIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Jeddah Corniche Circuit</p>
              <p className="inline-block text-white mr-3">Apr 18 - 20</p>
              <CalendarEmblems f2 f1a />
            </div>
          </a>

          {/*MIAMI GP*/}
          <a href={"/formulaone/races/miami"}
            className="w-full h-28 relative row-start-7 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 6</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MIAMI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Miami International Autodrome</p>
              <p className="inline-block text-white mr-3">May 2 - 4</p>
              <CalendarEmblems sprint f1a />
            </div>
          </a>

          {/*IMOLA GP*/}
          <a href={"/formulaone/races/imola"}
            className="w-full h-28 relative row-start-8 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#37AC37] to-[#175C19] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 7</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">EMILIA-ROMAGNA GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autodromo Enzo e Dino Ferrari</p>
              <p className="inline-block text-white mr-3">May 16 - 18</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*MONACO GP*/}
          <a href={"/formulaone/races/monaco"}
            className="w-full h-28 relative row-start-9 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E50915] to-[#FFFFFF] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 8</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MONACO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Monaco</p>
              <p className="inline-block text-white mr-3">May 23 - 25</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*SPAIN GP*/}
          <a href="/formulaone/races/spain"
            className="w-full h-28 relative row-start-10 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E20612] from-50% to-85% to-[#FABD00] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 9</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SPANISH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Barcelona-Catalunya</p>
              <p className="inline-block text-white mr-3">May 30 - Jun 1</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*CANADA GP*/}
          <a href={"/formulaone/races/canada"}
            className="w-full h-28 relative row-start-11 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EA2C36] from-50% to-90% to-[#FFFFFF] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 10</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CANADIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Gilles-Villeneuve</p>
              <p className="inline-block text-white mr-3">Jun 13 - 15</p>
              <CalendarEmblems f1a />
            </div>
          </a>

          {/*AUSTRIA GP*/}
          <a href="/formulaone/races/austria"
            className="w-full h-28 relative row-start-12 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C80F2E] to-[#FF3E5D] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 11</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Red Bull Ring</p>
              <p className="inline-block text-white mr-3">Jun 27 - 29</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*UK GP*/}
          <a href="/formulaone/races/great-britain"
            className="w-full h-28 relative row-start-13 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C7102E] to-[#032169] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 12</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BRITISH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Silverstone Circuit</p>
              <p className="inline-block text-white mr-3">Jul 4 - 6</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*BELGIUM GP*/}
          <a href="/formulaone/races/belgium"
            className="w-full h-28 relative row-start-14 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#030301] to-[#EB0917] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 13</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BELGIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Spa-Francorchamps</p>
              <p className="inline-block text-white mr-3">Jul 25 - 27</p>
              <CalendarEmblems sprint f2 f3 />
            </div>
          </a>

          {/*HUNGARY GP*/}
          <a href="/formulaone/races/hungary" className="w-full h-28 relative row-start-15 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EB0917] to-[#349D32] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 14</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">HUNGARIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Hungaroring</p>
              <p className="inline-block text-white mr-3">Aug 1 - 3</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*NETHERLANDS GP*/}
          <a href="/formulaone/races/netherlands"
            className="w-full h-28 relative row-start-16 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FF8113] to-[#04529A] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 15</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">DUTCH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Zandvoort</p>
              <p className="inline-block text-white mr-3">Aug 29 - 31</p>
              <CalendarEmblems f1a />
            </div>
          </a>

          {/*ITALY GP*/}
          <a href="/formulaone/races/italy"
            className="w-full h-28 relative row-start-17 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#048B46] to-[#CC222B] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 16</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ITALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autodromo Nazionale Monza</p>
              <p className="inline-block text-white mr-3">Sep 5 - 7</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*AZERBAIJAN GP*/}
          <a href="/formulaone/races/azerbaijan"
            className="w-full h-28 relative row-start-18 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#00B5E2] to-[#4F9F30] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 17</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AZERBAIJAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Baku City Circuit</p>
              <p className="inline-block text-white mr-3">Sep 19 - 21</p>
              <CalendarEmblems f2 />
            </div>
          </a>

          {/*SINGAPORE GP*/}
          <a href="/formulaone/races/singapore"
            className="w-full h-28 relative row-start-19 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E10E0E] to-[#FFFFFF] from-65% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 18</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SINGAPORE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Marina Bay Street Circuit</p>
              <p className="inline-block text-white mr-3">Oct 3 - 5</p>
              <CalendarEmblems f1a />
            </div>
          </a>

          {/*USA GP*/}
          <a href="/formulaone/races/united-states"
            className="w-full h-28 relative row-start-20 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#2112D9] to-[#DD0B26] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 19</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">UNITED STATES GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit of The Americas</p>
              <p className="inline-block text-white mr-3">Oct 17 - 19</p>
              <CalendarEmblems sprint />
            </div>
          </a>

          {/*MEXICO GP*/}
          <a href="/formulaone/races/mexico"
            className="w-full h-28 relative row-start-21 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#039542] to-[#E10813] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 20</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MEXICO CITY GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo Hermanos Rodríguez</p>
              <p className="inline-block text-white mr-3">Oct 24 - 26</p>
            </div>
          </a>

          {/*BRAZIL GP*/}
          <a href="/formulaone/races/brazil"
            className="w-full h-28 relative row-start-22 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#029739] to-[#FCDC00] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 21</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SÃO PAULO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo de Interlagos, São Paulo, Brazil</p>
              <p className="inline-block text-white mr-3">Nov 7 - 9</p>
              <CalendarEmblems sprint />
            </div>
          </a>

          {/*VEGAS GP*/}
          <a href="/formulaone/races/las-vegas"
            className="w-full h-28 relative row-start-23 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#0198A3] via-[#22142B] via-65 to-[#571060] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 22</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">LAS VEGAS GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Las Vegas Strip Circuit</p>
              <p className="inline-block text-white mr-3">Nov 20 - 22</p>
              <CalendarEmblems f1a />
            </div>
          </a>

          {/*QATAR GP*/}
          <a href="/formulaone/races/qatar"
            className="w-full h-28 relative row-start-24 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#8A1639] to-[#FFFFFF] from-70% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 23</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">QATAR GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Lusail International Circuit</p>
              <p className="inline-block text-white mr-3">Nov 28 - 30</p>
              <CalendarEmblems sprint f2 />
            </div>
          </a>

          {/*UAE GP*/}
          <a href="/formulaone/races/abu-dhabi"
            className="w-full h-28 relative row-start-25 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FD0002] via-[#01823F] to-[#000000] from-20% via-60% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 24</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ABU DHABI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Yas Marina Circuit</p>
              <p className="inline-block text-white mr-3">Dec 5 - 7</p>
              <CalendarEmblems f2 />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
