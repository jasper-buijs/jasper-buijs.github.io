/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/saudi-arabia", true);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp" alt={"Formula 1"} />
    </div>
  );
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.webp" alt={"Formula 2"} />
    </div>
  );
  const fa = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f1a.webp" alt={"Formula 3"} />
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
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#016C36] to-[#66C698]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/saudi-header-dated.webp" alt={""}
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className="h-max w-max m-auto">
            <a href="/formulaone/races/saudi-arabia/circuit.webp" target="_blank">
              <img src="/formulaone/races/saudi-arabia/circuit.webp" className="inline-block h-48 m-2"
                alt={"Jeddah Corniche Circuit. 50 laps. 99% Safety Car chance. 1 minute 30.734 fastest historical lap time."}
              />
            </a>
            <a href="/formulaone/races/saudi-arabia/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/saudi-arabia/starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Starting Grid. Max Verstappen starts on pole, Leclerc in second and Russell Perez."}
              />
            </a>
            <a href="/formulaone/races/saudi-arabia/race-result.webp" target="_blank">
              <img src="/formulaone/races/saudi-arabia/race-result.webp" className="inline-block h-48 m-2"
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
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Thursday Mar 7</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f2}P</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 12:55:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 13:40:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{fa}P</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 14:05:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 14:45:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 16:30:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Q</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 18:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 18:30:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP2</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 21:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{fa}Q</td>
            <td className="pr-2"
            >{[new Date("March 7, 2024 21:30:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 7, 2024 22:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday Mar 8</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{fa}R1</td>
            <td className="pr-2"
            >{[new Date("March 8, 2024 15:10:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 8, 2024 15:45:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP3</td>
            <td className="pr-2"
            >{[new Date("March 8, 2024 16:30:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 8, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}SR</td>
            <td className="pr-2"
            >{[new Date("March 8, 2024 18:10:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 8, 2024 19:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Q</td>
            <td className="pr-2"
            >{[new Date("March 8, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 8, 2024 21:00:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}{auvio}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday Mar 9</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{fa}R2</td>
            <td className="pr-2"
            >{[new Date("March 9, 2024 15:05:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 9, 2024 15:40:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}FR</td>
            <td className="pr-2"
            >{[new Date("March 9, 2024 16:25:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 9, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}R</td>
            <td className="pr-2"
            >{[new Date("March 9, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 9, 2024 22:00:00 UTC+03:00").toLocaleString(undefined, {
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
      <Paragraph title="Formula 2">
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/saudi-arabia/f2-sprint.webp" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f2-sprint.webp" className="block w-full my-2"
              alt={"Formula 2 Sprint results."}
            />
          </a>
          <a href="/formulaone/races/saudi-arabia/f2-feature.webp" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f2-feature.webp" className="block w-full my-2"
              alt={"Formula 2 Feature results."}
            />
          </a>
        </div>
      </Paragraph>
      <Paragraph title="F1 Academy">
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/saudi-arabia/f1a-race1.webp" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f1a-race1.webp" className="block w-full my-2"
              alt={"F1 Academy Race 1 results."}
            />
          </a>
          <a href="/formulaone/races/saudi-arabia/f1a-race2.webp" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f1a-race2.webp" className="block w-full my-2"
              alt={"F1 Academy Race 2 results."}
            />
          </a>
        </div>
      </Paragraph>
    </div>
  </>);
}

export default Page;