/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/japan", true);
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
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#BD022F] to-[#FF5782]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/japan-header-dated.webp" alt={""}
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className="h-max w-max m-auto">
            <a href="/formulaone/races/japan/circuit.webp" target="_blank">
              <img src="/formulaone/races/japan/circuit.webp" className="inline-block h-48 m-2"
                alt="Albert Park Circuit. 1 DRS zone. 53 laps. 67% Safety Car chance. 1 minute 30.983 fastest historic race lap time."
              />
            </a>
            <a href="/formulaone/races/japan/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/japan/starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Starting Grid. Max Verstappen starts on pole, Perez in second and Norris third."}
              />
            </a>
            <a href="/formulaone/races/japan/race-result.webp" target="_blank">
              <img src="/formulaone/races/japan/race-result.webp" className="inline-block h-48 m-2"
                alt={"Race Results. Max Verstappen won, Perez came second and Sainz third."}
              />
            </a>
          </div>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday Apr 5</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2"
            >{[new Date("April 5, 2024 11:30:00 UTC+09:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("April 5, 2024 12:30:00 UTC+09:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP2</td>
            <td className="pr-2"
            >{[new Date("April 5, 2024 15:00:00 UTC+09:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("April 5, 2024 16:00:00 UTC+09:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday Apr 6</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP3</td>
            <td className="pr-2"
            >{[new Date("April 6, 2024 11:30:00 UTC+09:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("April 6, 2024 12:30:00 UTC+09:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Q</td>
            <td className="pr-2"
            >{[new Date("April 6, 2024 15:00:00 UTC+09:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("April 6, 2024 16:00:00 UTC+09:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}{auvio}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday Apr 7</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f1}R</td>
            <td className="pr-2"
            >{[new Date("April 7, 2024 14:00:00 UTC+09:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("April 7, 2024 16:00:00 UTC+09:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}{auvio}</td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2"
        >{["Times displayed in ", new Date().toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "shortGeneric"
        }).slice(4)].join(" ")}</p>
      </Paragraph>
    </div>
  </>);
}

export default Page;