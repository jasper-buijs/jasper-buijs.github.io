/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/australia", true);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp" alt="Formula 1" />
    </div>
  );
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.webp" alt="Formula 2" />
    </div>
  );
  const f3 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f3.webp" alt="Formula 3" />
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
      <div className="h-[28vw] mb-4 bg-gradient-to-r from-[#023874] to-[#7CAADC]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
            src="/formulaone/banners-dated/australia-header-dated.webp" alt=""
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className="h-max w-max m-auto">
            <a href="/formulaone/races/australia/circuit.webp" target="_blank">
              <img src="/formulaone/races/australia/circuit.webp" className="inline-block h-48 m-2"
                alt="Albert Park Circuit. 4 DRS zones. 58 laps. 67% Safety Car chance. 1 minute 20.235 fastest historic race lap time."
              />
            </a>
            <a href="/formulaone/races/australia/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/australia/starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Starting Grid. Max Verstappen starts on pole, Sainz in second and Norris third."}
              />
            </a>
            <a href="/formulaone/races/australia/race-result.webp" target="_blank">
              <img src="/formulaone/races/australia/race-result.webp" className="inline-block h-48 m-2"
                alt={"Race Results. Carlos Sainz won, Leclerc came second and Norris third."}
              />
            </a>
          </div>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday Mar 22</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}P</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 8:50:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 9:35:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}P</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 10:00:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 10:45:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP1</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 12:30:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 13:30:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f3}Q</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 14:00:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 14:30:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP2</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 16:00:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 17:00:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Q</td>
            <td className="pr-2"
            >{[new Date("March 22, 2024 17:30:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 22, 2024 18:00:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday Mar 23</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}SR</td>
            <td className="pr-2"
            >{[new Date("March 23, 2024 11:15:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 23, 2024 12:00:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}FP3</td>
            <td className="pr-2"
            >{[new Date("March 23, 2024 12:30:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 23, 2024 13:30:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}SR</td>
            <td className="pr-2"
            >{[new Date("March 23, 2024 14:15:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 23, 2024 15:05:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Q</td>
            <td className="pr-2"
            >{[new Date("March 23, 2024 16:00:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 23, 2024 17:00:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}{hm}{auvio}</td>
          </tr>
          <tr>
            <td className="h-[1rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday Mar 24</th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}FR</td>
            <td className="pr-2"
            >{[new Date("March 24, 2024 9:05:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 24, 2024 9:55:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}FR</td>
            <td className="pr-2"
            >{[new Date("March 24, 2024 11:35:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 24, 2024 12:40:00 UTC+11:00").toLocaleString(undefined, {
              hour: "numeric",
              minute: "numeric"
            })].join(" ")}</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}R</td>
            <td className="pr-2"
            >{[new Date("March 24, 2024 15:00:00 UTC+11:00").toLocaleString(undefined, {
              weekday: "narrow",
              hour: "numeric",
              minute: "numeric"
            }), "-", new Date("March 24, 2024 17:00:00 UTC+11:00").toLocaleString(undefined, {
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
      <Paragraph title={"Formula 2"}>
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/australia/f2-sprint.webp" target="_blank">
            <img src="/formulaone/races/australia/f2-sprint.webp" className="block w-full my-2"
              alt={"Formula 2 Sprint results."}
            />
          </a>
          <a href="/formulaone/races/australia/f2-feature.webp" target="_blank">
            <img src="/formulaone/races/australia/f2-feature.webp" className="block w-full my-2"
              alt={"Formula 2 Feature results."}
            />
          </a>
        </div>
      </Paragraph>
      <Paragraph title={"Formula 3"}>
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/australia/f3-sprint.webp" target="_blank">
            <img src="/formulaone/races/australia/f3-sprint.webp" className="block w-full my-2"
              alt={"Formula 3 Sprint results."}
            />
          </a>
          <a href="/formulaone/races/australia/f3-feature.webp" target="_blank">
            <img src="/formulaone/races/australia/f3-feature.webp" className="block w-full my-2"
              alt={"Formula 3 Feature results."}
            />
          </a>
        </div>
      </Paragraph>
    </div>
  </>);
}

export default Page;