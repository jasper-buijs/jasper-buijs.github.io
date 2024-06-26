/* eslint-disable @next/next/no-img-element */
"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone/races/canada", false);
  const f1 = (<div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp"
        alt={"Formula 1"}
      />
    </div>);
  const hm = (<div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]"
        src="/formulaone/heiligemaagden128x128.webp" alt={"Streamed on heiligemaagden.com."}
      />
    </div>);
  const auvio = (<div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]"
        src="/formulaone/auvio_192x192.webp" alt={"Streamed on RTBF Auvio."}
      />
    </div>);
  return (<>
      <NavBar activePage="formulaone" />
      <div className="h-[28vw] mx-12 bg-gradient-to-r from-[#EA2C36] to-[#010101]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/canada-header-dated.webp" alt={""}
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className={"h-max w-max m-auto"}>
            <a href="/formulaone/races/canada/circuit.webp" target="_blank">
              <img src="/formulaone/races/canada/circuit.webp" className="inline-block h-96 m-2"
                alt="Circuit Gilles-Villeneuve. 3 DRS zones. 70 laps. 67% Safety Car chance. 1 minute 13.078 fastest historic race lap time."
              />
            </a>
            <a href="/formulaone/races/canada/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/canada/starting-grid.webp" className="inline-block h-96 m-2"
                alt={"Starting Grid. George Russell starts on pole, Verstappen in second and Norris third."}
              />
            </a>
            <a href="/formulaone/races/canada/race-result.webp" target="_blank">
              <img src="/formulaone/races/canada/race-result.webp" className="inline-block h-96 m-2"
                alt={"Race Results. Max Verstappen won, Norris came second and Russell third."}
              />
            </a>
          </div>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday June 7</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 1</td>
            <td className="pr-2">
              {[new Date("June 7, 2024 13:30:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              }), "-", new Date("June 7, 2024 14:30:00 UTC-04:00").toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 2</td>
            <td className="pr-2">
              {[new Date("June 7, 2024 17:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              }), "-", new Date("June 7, 2024 18:00:00 UTC-04:00").toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="h-[2rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday June 8</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 3</td>
            <td className="pr-2">
              {[new Date("June 8, 2024 12:30:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              }), "-", new Date("June 8, 2024 13:30:00 UTC-04:00").toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Qualifying</td>
            <td className="pr-2">
              {[new Date("June 8, 2024 16:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              }), "-", new Date("June 8, 2024 17:00:00 UTC-04:00").toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })].join(" ")}
            </td>
            <td className="pr-2">18&apos; + 15&apos; + 12&apos;</td>
            <td className="pr-2">{hm}{auvio}</td>
          </tr>
          <tr>
            <td className="h-[2rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday June 9</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}Race</td>
            <td className="pr-2">
              {[new Date("June 9, 2024 14:00:00 UTC-04:00").toLocaleString(undefined, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
              }), "-", new Date("June 9, 2024 16:00:00 UTC-04:00").toLocaleString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })].join(" ")}
            </td>
            <td className="pr-2">70L or 2h+1L</td>
            <td className="pr-2">{hm}{auvio}</td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2"
        >{["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "shortGeneric",
        }).slice(4)].join(" ")}</p>
      </Paragraph>
      <FooterBar />
    </>);
};

export default Page;