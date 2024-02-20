"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";

const Page = () => {
  const f1 = <img className="inline h-[0.5rem] mr-1" src="/formulaone/f1web.png" />;
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="h-[500px] mx-12 bg-gray-600">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]" src="/formulaone/banners-dated/preseason-header-dated.png" />
        </div>
      </div>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
            <tr>
              <th className="pr-2 text-left">Wednesday February 21</th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f1}Morning Session</td>
              <td className="pr-2">{[new Date("February 21, 2024 10:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 21, 2024 14:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Afternoon Session</td>
              <td className="pr-2">{[new Date("February 21, 2024 15:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 21, 2024 19:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left">Thursday February 22</th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f1}Morning Session</td>
              <td className="pr-2">{[new Date("February 22, 2024 10:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 22, 2024 14:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Afternoon Session</td>
              <td className="pr-2">{[new Date("February 22, 2024 15:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 22, 2024 19:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left">Friday February 23</th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f1}Morning Session</td>
              <td className="pr-2">{[new Date("February 23, 2024 10:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 23, 2024 14:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Afternoon Session</td>
              <td className="pr-2">{[new Date("February 23, 2024 15:00:00 GMT+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("February 23, 2024 19:00:00 GMT+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2">{["Times displayed in ", new Date().toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "shortGeneric" }).slice(4)].join(" ")}</p>
      </Paragraph>
      <Paragraph title="Driver selection">
        <table className="table-fixed w-full px-4 text-center">
          <tbody>
            <tr>
              <th colSpan={11} className="text-left">
                Wednesday Februari 21
              </th>
            </tr>
            <tr>
              <th></th>
              <th>Red Bull</th>
              <th>Mercedes</th>
              <th>Ferrari</th>
              <th>McLaren</th>
              <th>Aston Martin</th>
              <th>Alpine</th>
              <th>Williams</th>
              <th>Racing Bulls</th>
              <th>Kick Sauber</th>
              <th>Haas</th>
            </tr>
            <tr>
              <th className="text-left">Morning Session</th>
              <td>Max Verstappen</td>
              <td>George Russel</td>
              <td>Charles Leclerc</td>
              <td>Oscar Piastri</td>
              <td>Fernando Alonso</td>
              <td>Esteban Ocon</td>
              <td>Alex Albon</td>
              <td>Yuki Tsunoda</td>
              <td>Valtteri Bottas</td>
              <td>Kevin Magnussen</td>
            </tr>
            <tr>
              <th className="text-left">Afternoon Session</th>
              <td>Max Verstappen</td>
              <td>George Russel</td>
              <td>Carlos Sainz</td>
              <td>Lando Norris</td>
              <td>Lance Stroll</td>
              <td>Pierre Gasly</td>
              <td>Logan Sargeant</td>
              <td>Daniel Ricciardo</td>
              <td>Zhou Guanyu</td>
              <td>Nico Hulkenberg</td>
            </tr>
          </tbody>
        </table>
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;
