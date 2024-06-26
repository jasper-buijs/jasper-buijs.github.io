/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone/races/austria", true);
  const f1 = (<div className="inline-block w-10 relative h-[0.5rem]">
    <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp"
      alt={"Formula 1"}
    />
  </div>);
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.webp" alt={"Formula 2"} />
    </div>
  );
  const f3 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f3.webp" alt={"Formula 3"} />
    </div>
  );
  const hm = (<div className="inline-block w-3 relative h-[0.6rem]">
    <img className="inline-block h-[0.6rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]"
      src="/formulaone/heiligemaagden128x128.webp" alt={"Streamed on heiligemaagden.com."}
    />
  </div>);
  const auvio = (<div className="inline-block w-3 relative h-[0.6rem]">
    <img className="inline-block h-[0.6rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]"
      src="/formulaone/auvio_192x192.webp" alt={"Streamed on RTBF Auvio."}
    />
  </div>);
  return (<>
    <NavBar activePage="formulaone" />
    <div className="py-6 pl-2 pr-20">
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#C80F2E] to-[#FF3E5D]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/austria-header-dated.webp" alt={""}
          />
        </div>
      </div>
      {/*<Paragraph title="Weekend Graphics">
       <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
       <div className={"h-max w-max m-auto"}>
       <a href="/formulaone/races/spain/circuit.webp" target="_blank">
       <img src="/formulaone/races/spain/circuit.webp" className="inline-block h-96 m-2"
       alt="Circuit de Barcelona-Catalunya. 2 DRS zones. 66 laps. 50% Safety Car chance. 1 minute 16.330 fastest historic race lap time."
       />
       </a>
       <a href="/formulaone/races/spain/starting-grid.webp" target="_blank">
       <img src="/formulaone/races/spain/starting-grid.webp" className="inline-block h-96 m-2"
       alt={"Starting Grid. Lando Norris starts on pole, Verstappen in second and Russell third."}
       />
       </a>
       <a href="/formulaone/races/spain/race-result.webp" target="_blank">
       <img src="/formulaone/races/spain/race-result.webp" className="inline-block h-96 m-2"
       alt={"Race Results. Max Verstappen won, Norris came second and Hamilton third."}
       />
       </a>
       </div>
       </div>
       </Paragraph>*/}
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday June 28</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}P</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 08:55:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 09:40:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}P</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 10:05:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 10:50:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 12:30:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f3}Q</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 14:00:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 14:30:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Q</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 14:55:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 15:25:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}SQ</td>
            <td className="pr-2">
              {[new Date("June 28, 2024 16:30:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 28, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{auvio}
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday June 29</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}SR</td>
            <td className="pr-2">
              {[new Date("June 29, 2024 09:30:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 29, 2024 10:15:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}S</td>
            <td className="pr-2">
              {[new Date("June 29, 2024 12:00:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 29, 2024 12:30:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}SR</td>
            <td className="pr-2">
              {[new Date("June 29, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 29, 2024 14:20:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Q</td>
            <td className="pr-2">
              {[new Date("June 29, 2024 16:00:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 29, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday June 30</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}FR</td>
            <td className="pr-2">
              {[new Date("June 30, 2024 08:30:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 30, 2024 09:20:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}FR</td>
            <td className="pr-2">
              {[new Date("June 30, 2024 10:00:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 30, 2024 11:05:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}R</td>
            <td className="pr-2">
              {[new Date("June 30, 2024 15:00:00 UTC+02:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("June 30, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{hm}{auvio}
            </td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2"
        >{["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "shortGeneric",
        }).slice(4)].join(" ")}</p>
      </Paragraph>
    </div>
  </>);
};

export default Page;