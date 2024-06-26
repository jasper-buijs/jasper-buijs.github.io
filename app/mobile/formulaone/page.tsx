/* eslint-disable @next/next/no-img-element */
"use client";

import { CalendarEmblems } from "@/app/components/mobile/formulaone/CalendarEmblems";
import NavBar from "@/app/components/mobile/NavBar";
import redirect from "../../components/redirect";

const Home = () => {
  redirect("/formulaone", true);
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="py-6 pl-2 pr-20">
        <div className="grid grid-cols-1 auto-rows-fr w-full mb-2">
          {/*PRE-SEASON TESTING*/ }
          <a href="/mobile/formulaone/races/pst"
            className="w-full h-28 relative row-start-1 row-span-1 col-start-1 col-span-1">
            <div className={ `bg-gray-600 absolute brightness-[80%] right-1 bottom-2 left-1 top-3 py-2 pl-2 rounded-md`}>
              <p className="block text-white font-semibold text-lg">PRE-SEASON TESTING</p>
              <p className="block text-white">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Feb 21 - 23</p>
            </div>
          </a>

          {/*BAHRAIN GP*/}
          <a href="/mobile/formulaone/races/bahrain"
            className="w-full h-28 relative row-start-2 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E40A18] to-[#FDC2C8] absolute brightness-[80%] right-1 bottom-2 left-1 top-0 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 1</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BAHRAIN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Bahrain International Circuit</p>
              <p className="inline-block text-white mr-3">Feb 29 - Mar 2</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*SAUDI ARABIA GP*/}
          <a href="/mobile/formulaone/races/saudi-arabia"
            className="w-full h-28 relative row-start-3 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#016C36] to-[#66C698] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 2</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SAUDI ARABIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Jeddah Corniche Circuit</p>
              <p className="inline-block text-white mr-3">Mar 7 - 9</p>
              <CalendarEmblems f2 f1a />
            </div>
          </a>

          {/*AUSTRALIA GP*/}
          <a href="/mobile/formulaone/races/australia"
            className="w-full h-28 relative row-start-4 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#023874] to-[#7CAADC] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 3</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Albert Park Circuit</p>
              <p className="inline-block text-white mr-3">Mar 22 - 24</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*JAPAN GP*/}
          <a href="/mobile/formulaone/races/japan"
            className="w-full h-28 relative row-start-5 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#BD022F] to-[#FF5782] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 4</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">JAPANESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Suzuka International Racing Course</p>
              <p className="inline-block text-white mr-3">Apr 5 - 7</p>
            </div>
          </a>

          {/*CHINESE GP*/}
          <a href="/mobile/formulaone/races/china"
            className="w-full h-28 relative row-start-6 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EE1C25] to-[#FFFF00] from-50% absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 5</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CHINESE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Shanghai International Circuit</p>
              <p className="inline-block text-white mr-3">Apr 19 - 21</p>
              <CalendarEmblems sprint />
            </div>
          </a>

          {/*MIAMI GP*/}
          <a href={"/mobile/formulaone/races/miami"}
            className="w-full h-28 relative row-start-7 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 6</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MIAMI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Miami International Autodrome</p>
              <p className="inline-block text-white mr-3">May 3 - 5</p>
              <CalendarEmblems sprint f1a />
            </div>
          </a>

          {/*IMOLA GP*/}
          <a href={"/mobile/formulaone/races/emilia-romagna"}
            className="w-full h-28 relative row-start-8 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#37AC37] to-[#175C19] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 7</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">EMILIA-ROMAGNA GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autodromo Enzo e Dino Ferrari</p>
              <p className="inline-block text-white mr-3">May 17 - 19</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*MONACO GP*/}
          <a href={"/mobile/formulaone/races/monaco"}
            className="w-full h-28 relative row-start-9 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E50915] to-[#FEDADC] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 8</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MONACO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Monaco</p>
              <p className="inline-block text-white mr-3">May 24 - 26</p>
              <CalendarEmblems f2 f3 />
            </div>
          </a>

          {/*CANADA GP*/}
          <a href={"/mobile/formulaone/races/canada"} className="w-full h-28 relative row-start-10 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#EA2C36] to-[#010101] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 9</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">CANADIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Gilles-Villeneuve</p>
              <p className="inline-block text-white mr-3">Jun 7 - 9</p>
            </div>
          </a>

          {/*SPAIN GP*/}
          <a href="/mobile/formulaone/races/spain" className="w-full h-28 relative row-start-11 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E20612] to-[#FFD403] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 10</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SPANISH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Barcelona-Catalunya</p>
              <p className="inline-block text-white mr-3">Jun 21 - 23</p>
              <CalendarEmblems f2 f3 f1a />
            </div>
          </a>

          {/*AUSTRIA GP*/}
          <a href="/mobile/formulaone/races/austria" className="w-full h-28 relative row-start-12 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C80F2E] to-[#FF3E5D] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 11</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AUSTRIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Red Bull Ring</p>
              <p className="inline-block text-white mr-3">Jun 28 - 30</p>
              <CalendarEmblems sprint f2 f3 />
            </div>
          </a>

          {/*UK GP*/}
          <div className="w-full h-28 relative row-start-13 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#C7102E] to-[#032169] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 12</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BRITISH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Silverstone Circuit</p>
              <p className="inline-block text-white mr-3">Jul 5 - 7</p>
              <CalendarEmblems f2 f3 />
            </div>
          </div>

          {/*HUNGARY GP*/}
          <div className="w-full h-28 relative row-start-14 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#E10813] to-[#2E8C2C] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 13</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">HUNGARIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Hungaroring</p>
              <p className="inline-block text-white mr-3">Jul 19 - 21</p>
              <CalendarEmblems f2 f3 />
            </div>
          </div>

          {/*BELGIUM GP*/}
          <div className="w-full h-28 relative row-start-15 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#030301] to-[#EF343F] via-[#C7AB1C] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 14</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">BELGIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit de Spa-Francorchamps</p>
              <p className="inline-block text-white mr-3">Jul 26 - 28</p>
              <CalendarEmblems f2 f3 />
            </div>
          </div>

          {/*NETHERLANDS GP*/}
          <div className="w-full h-28 relative row-start-16 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#F89629] to-[#04529A] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 15</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">DUTCH GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit Zandvoort</p>
              <p className="inline-block text-white mr-3">Aug 23 - 25</p>
              <CalendarEmblems f1a />
            </div>
          </div>

          {/*ITALY GP*/}
          <div className="w-full h-28 relative row-start-17 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#048B46] to-[#CC222B] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 16</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ITALIAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autodromo Nazionale Monza</p>
              <p className="inline-block text-white mr-3">Aug 30 - Sep 1</p>
              <CalendarEmblems f2 f3 />
            </div>
          </div>

          {/*AZERBAIJAN GP*/}
          <div className="w-full h-28 relative row-start-18 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#00B5E2] to-[#4F9F30] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 17</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">AZERBAIJAN GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Baku City Circuit</p>
              <p className="inline-block text-white mr-3">Sep 13 - 15</p>
              <CalendarEmblems f2 />
            </div>
          </div>

          {/*SINGAPORE GP*/}
          <div className="w-full h-28 relative row-start-19 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#F02739] to-[#FEAFB5] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 18</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SINGAPORE GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Marina Bay Street Circuit</p>
              <p className="inline-block text-white mr-3">Sep 20 - 22</p>
              <CalendarEmblems f1a />
            </div>
          </div>

          {/*USA GP*/}
          <div className="w-full h-28 relative row-start-20 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#3F3B6E] to-[#B12234] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 19</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">UNITED STATES GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Circuit of The Americas</p>
              <p className="inline-block text-white mr-3">Oct 18 - 20</p>
              <CalendarEmblems sprint />
            </div>
          </div>

          {/*MEXICO GP*/}
          <div className="w-full h-28 relative row-start-21 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#039542] to-[#E10813] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 20</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">MEXICO CITY GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo Hermanos Rodríguez</p>
              <p className="inline-block text-white mr-3">Oct 25 - 27</p>
            </div>
          </div>

          {/*BRAZIL GP*/}
          <div className="w-full h-28 relative row-start-22 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#029739] to-[#FCDC00] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 21</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">SÃO PAULO GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Autódromo de Interlagos, São Paulo, Brazil</p>
              <p className="inline-block text-white mr-3">Nov 1 - 3</p>
              <CalendarEmblems sprint />
            </div>
          </div>

          {/*VEGAS GP*/}
          <div className="w-full h-28 relative row-start-23 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#0198A3] via-[#22142B] via-65 to-[#571060] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 22</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">LAS VEGAS GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Las Vegas Strip Circuit</p>
              <p className="inline-block text-white mr-3">Nov 22 - 24</p>
            </div>
          </div>

          {/*QATAR GP*/}
          <div className="w-full h-28 relative row-start-24 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#8A1639] to-[#A29376] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 23</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">QATAR GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Lusail International Circuit</p>
              <p className="inline-block text-white mr-3">Nov 29 - Dec 1</p>
              <CalendarEmblems sprint f2 f1a />
            </div>
          </div>

          {/*UAE GP*/}
          <div className="w-full h-28 relative row-start-25 row-span-1 col-start-1 col-span-1">
            <div className={`bg-gradient-to-r from-[#FD0002] to-[#01823F] absolute brightness-[80%] right-1 top-0 bottom-2 left-1 py-2 pl-2 rounded-md`}>
              <p className="block text-white text-sm italic">ROUND 24</p>
              <p className="block text-white font-semibold text-lg leading-5 truncate max-w-[calc(100%-15px)]">ABU DHABI GRAND PRIX</p>
              <p className="block text-white truncate max-w-[calc(100%-15px)]">Yas Marina Circuit</p>
              <p className="inline-block text-white mr-3">Dec 6 - 8</p>
              <CalendarEmblems f2 f1a />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
