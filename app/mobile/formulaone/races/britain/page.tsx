/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone/races/britain", true);
  const f1 = (<div className="inline-block w-10 relative h-[0.5rem]">
    <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp"
      alt={"Formula 1"}
    />
  </div>);
  const f2 = (<div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.webp"
        alt={"Formula 2"}
      />
    </div>);
  const f3 = (<div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f3.webp"
        alt={"Formula 3"}
      />
    </div>);
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
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#C7102E] to-[#032169]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/britain-header-dated.webp" alt={""}
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className={"h-max w-max m-auto"}>
            <a href="/formulaone/races/britain/circuit.webp" target="_blank">
              <img src="/formulaone/races/britain/circuit.webp" className="inline-block h-48 m-2"
                alt="Silverstone Circuit. 2 DRS zones. 52 laps. 89% Safety Car chance. 1 minute 27.097 fastest historic race lap time."
              />
            </a>
            <a href="/formulaone/races/britain/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/britain/starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Starting Grid. George Russell starts on pole, Hamilton in second and Norris third."}
              />
            </a>
            <a href="/formulaone/races/britain/race-result.webp" target="_blank">
              <img src="/formulaone/races/britain/race-result.webp" className="inline-block h-48 m-2"
                alt={"Race Results. Lewis Hamilton won, Verstappen came second and Norris third."}
              />
            </a>
          </div>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday July 5</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}P</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 08:40:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 09:25:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}P</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 10:00:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 10:45:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 12:30:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 13:30:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f3}Q</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 14:05:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 14:35:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Q</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 15:05:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 15:35:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP2</td>
            <td className="pr-2">
              {[new Date("July 5, 2024 16:00:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 5, 2024 17:00:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday July 6</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP3</td>
            <td className="pr-2">
              {[new Date("July 6, 2024 11:30:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 6, 2024 12:30:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}SR</td>
            <td className="pr-2">
              {[new Date("July 6, 2024 13:15:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 6, 2024 14:05:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Q</td>
            <td className="pr-2">
              {[new Date("July 6, 2024 15:00:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 6, 2024 16:00:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f3}SR</td>
            <td className="pr-2">
              {[new Date("July 6, 2024 18:10:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 6, 2024 18:55:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday July 7</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}FR</td>
            <td className="pr-2">
              {[new Date("July 7, 2024 08:20:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 7, 2024 09:10:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}FR</td>
            <td className="pr-2">
              {[new Date("July 7, 2024 09:55:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 7, 2024 11:00:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}R</td>
            <td className="pr-2">
              {[new Date("July 7, 2024 15:00:00 UTC+01:00").toLocaleString(undefined, {
                weekday: "narrow", hour: "numeric", minute: "numeric",
              }), "-", new Date("July 7, 2024 17:00:00 UTC+01:00").toLocaleString(undefined, {
                hour: "numeric", minute: "numeric",
              })].join(" ")}{hm}{auvio}
            </td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2"
        >{["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit", timeZoneName: "shortGeneric",
        }).slice(4)].join(" ")}</p>
      </Paragraph>
      <Paragraph title="Formula 2">
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/britain/f2-sprint.webp" target="_blank">
            <img src="/formulaone/races/britain/f2-sprint.webp" className="block w-full my-2"
              alt={"Formula 2 Sprint results."}
            />
          </a>
          <a href="/formulaone/races/britain/f2-feature.webp" target="_blank">
            <img src="/formulaone/races/britain/f2-feature.webp" className="block w-full my-2"
              alt={"Formula 2 Feature results."}
            />
          </a>
        </div>
      </Paragraph>
      <Paragraph title="Formula 3">
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/britain/f3-sprint.webp" target="_blank">
            <img src="/formulaone/races/britain/f3-sprint.webp" className="block w-full my-2"
              alt={"Formula 3 Sprint results."}
            />
          </a>
          <a href="/formulaone/races/britain/f3-feature.webp" target="_blank">
            <img src="/formulaone/races/britain/f3-feature.webp" className="block w-full my-2"
              alt={"Formula 3 Feature results."}
            />
          </a>
        </div>
      </Paragraph>
    </div>
  </>);
};

export default Page;