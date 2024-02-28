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
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Wednesday February 21</th>
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
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Thursday February 22</th>
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
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday February 23</th>
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
      <Paragraph title="Day 1 Results">
        <img src="/formulaone/races/pst/day1-results.png" className="m-auto p-4" />
      </Paragraph>
      <Paragraph title="Day 2 Results">
        <img src="/formulaone/races/pst/day2-results.jpg" className="m-auto p-4" />
      </Paragraph>
      <Paragraph title="Day 3 Results">
        <img src="/formulaone/races/pst/day3-results.jpg" className="m-auto p-4" />
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;
