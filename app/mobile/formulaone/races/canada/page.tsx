/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/canada", true);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp" alt={"Formula 1"} />
    </div>
  );
  const hm = (
    <div className="inline-block w-3 relative h-[0.6rem]">
      <img className="inline-block h-[0.6rem] absolute left-1/2 translate-x-[-50%] translate-y-[-50%]" src="/formulaone/heiligemaagden128x128.webp" alt={"Streamed on heiligemaagden.com"} />
    </div>
  );
  const auvio = (
    <div className="inline-block w-3 relative h-[0.6rem]">
      <img className="inline-block h-[0.6rem] absolute left-1/2 translate-x-[-50%] translate-y-[-50%]" src="/formulaone/auvio_192x192.webp" alt={"Streamed on RTBF Auvio"} />
    </div>
  );
  return (<>
    <NavBar activePage="formulaone" />
    <div className="py-6 pl-2 pr-20">
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#EA2C36] to-[#010101]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
               src="/formulaone/banners-dated/canada-header-dated.webp" alt={ "" }/>
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className={ "h-max w-max m-auto" }>
            <a href="/formulaone/races/canada/circuit.webp" target="_blank">
              <img src="/formulaone/races/canada/circuit.webp" className="inline-block h-48 m-2"
                   alt="Circuit Gilles-Villeneuve. 3 DRS zones. 70 laps. 67% Safety Car chance. 1 minute 13.078 fastest historic race lap time."/>
            </a>
            {/*<a href="/formulaone/races/canada/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/canada/starting-grid.webp" className="inline-block h-48 m-2"
                   alt={"Starting Grid. Charles Leclerc starts on pole, Piastri in second and Sainz third."} />
            </a>
            <a href="/formulaone/races/canada/race-result.webp" target="_blank">
              <img src="/formulaone/races/canada/race-result.webp" className="inline-block h-48 m-2" alt={"Race Results. Charles Leclerc won, Piastri came second and Sainz third."} />
            </a>*/ }
          </div>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday June 7</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2">
              { [new Date("June 7, 2024 13:30:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "narrow",
                hour: "numeric",
                minute: "numeric"
              }), "-",
                new Date("June 7, 2024 14:30:00 UTC-04:00").toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric"
                })].join(" ") }
            </td>
          </tr>
          <tr>
            <td className="pr-2">{ f1 }FP2</td>
            <td className="pr-2">
              { [new Date("June 7, 2024 17:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "narrow",
                hour: "numeric",
                minute: "numeric"
              }), "-",
                new Date("June 7, 2024 18:00:00 UTC-04:00").toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric"
                })].join(" ") }
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday June 8</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{ f1 }FP3</td>
            <td className="pr-2">
              { [new Date("June 8, 2024 12:30:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "narrow",
                hour: "numeric",
                minute: "numeric"
              }), "-",
                new Date("June 8, 2024 13:30:00 UTC-04:00").toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric"
                })].join(" ") }
            </td>
          </tr>
          <tr>
            <td className="pr-2">{ f1 }Q</td>
            <td className="pr-2">
              { [new Date("June 8, 2024 16:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "narrow",
                hour: "numeric",
                minute: "numeric"
              }), "-",
                new Date("June 8, 2024 17:00:00 UTC-04:00").toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric"
                })].join(" ") }{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday June 9</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{ f1 }R</td>
            <td className="pr-2">
              { [new Date("May 26, 2024 14:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "narrow",
                hour: "numeric",
                minute: "numeric"
              }), "-",
                new Date("May 26, 2024 16:00:00 UTC-04:00").toLocaleString(undefined, {
                  hour: "numeric",
                  minute: "numeric"
                })].join(" ") }{hm}{auvio}
            </td>
          </tr>
          </tbody>
        </table>
        <p
          className="text-center font-normal text-sm italic mt-4 mb-2">{ ["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "shortGeneric"
        }).slice(4)].join(" ") }</p>
      </Paragraph>
    </div>
  </>);
}

export default Page;