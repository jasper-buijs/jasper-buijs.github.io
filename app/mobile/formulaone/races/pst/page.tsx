/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/pst", true);
  const f1 = <img className="inline h-[0.5rem] mr-1" src="/formulaone/f1web.webp" alt={"Formula 1"} />;
  return (<>
    <NavBar activePage="formulaone" />
    <div className="py-6 pl-2 pr-20">
      <div className="h-[28vw] mb-4 bg-gray-600">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/preseason-header-dated.webp" alt={""}
          />
        </div>
      </div>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Wednesday Feb 21</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}AM</td>
            <td className="pr-2"
            >{[new Date("February 21, 2024 10:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 21, 2024 14:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}PM</td>
            <td className="pr-2"
            >{[new Date("February 21, 2024 15:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 21, 2024 19:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Thursday Feb 22</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}AM</td>
            <td className="pr-2"
            >{[new Date("February 22, 2024 10:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 22, 2024 14:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}PM</td>
            <td className="pr-2"
            >{[new Date("February 22, 2024 15:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 22, 2024 19:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday Feb 23</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}AM</td>
            <td className="pr-2"
            >{[new Date("February 23, 2024 10:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 23, 2024 14:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}PM</td>
            <td className="pr-2"
            >{[new Date("February 23, 2024 15:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("February 23, 2024 19:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2"
        >{["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "shortGeneric"
        }).slice(4)].join(" ")}</p>
      </Paragraph>
      <Paragraph title="Day 1 Results">
        <img src="/formulaone/races/pst/day1-results.webp" className="m-auto pb-1" alt={"Day 1 results."} />
      </Paragraph>
      <Paragraph title="Day 2 Results">
        <img src="/formulaone/races/pst/day2-results.webp" className="m-auto pb-1" alt={"Day 2 results."} />
      </Paragraph>
      <Paragraph title="Day 3 Results">
        <img src="/formulaone/races/pst/day3-results.webp" className="m-auto pb-1" alt={"Day 3 results."} />
      </Paragraph>
    </div>
  </>);
}

export default Page;