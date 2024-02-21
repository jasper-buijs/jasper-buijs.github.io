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
      <Paragraph title="Day 1 Results">
        At the end of Day 1 of Pre-Season Testing, it's Verstappen at the top with a 1:31.344, keeping clear of Norris in second by over 1.1 seconds. Verstappen and Russell were the only two drivers to drive the entire day, with all other teams alternating drivers between the morning and afternoon sessions. So far we have seen no red flags. Even though the Williams of Alex Albon did stop on track with a fuel pump-related issue, marshals were able to clear it without needing more than a double-waved yellow flag. Other than that it would be a quiet session, without many incidents. Ocon would run wide and into the gravel traps in turn 4, and Sargeant would spin and also end up in the gravel when entering turn 10. As both Williams drivers had some trouble, Williams was the team completing the least amount of laps by far, with only 61 laps completed between both drivers. That's the same amount of laps Gasly managed to do in his afternoon session on his own. Pre-Season testing will be back tomorrow, same time, for day two.
        <img src="/formulaone/races/pst/day1-results.png" className="m-auto p-4" />
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;
