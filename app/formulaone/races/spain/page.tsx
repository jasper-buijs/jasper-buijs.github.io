/* eslint-disable @next/next/no-img-element */
"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone/races/spain", false);
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
  const fa = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f1a.webp" alt={"Formula 3"} />
    </div>
  );
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
    <div className="h-[28vw] mx-12 bg-gradient-to-r from-[#E20612] to-[#FFD403]">
      <div className="h-full w-full relative">
        <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]"
          src="/formulaone/banners-dated/spain-header-dated.webp" alt={""}
        />
      </div>
    </div>
    <Paragraph title="Weekend Graphics">
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
    </Paragraph>
    <Paragraph title="Schedule">
      <table className="w-max m-auto table-auto">
        <tbody>
        <tr>
          <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday June 21</th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
        </tr>
        <tr>
          <td className="pr-2">{fa}Practice</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 08:50:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 09:30:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f3}Practice</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 09:55:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 10:40:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f2}Practice</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 11:05:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 11:50:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f1}Practice 1</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 14:30:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f3}Qualifying</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 15:00:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 15:30:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f2}Qualifying</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 15:55:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 16:25:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f1}Practice 2</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 18:00:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{fa}Qualifying</td>
          <td className="pr-2">
            {[new Date("June 21, 2024 18:30:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 21, 2024 19:00:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="h-[2rem]"></td>
        </tr>
        <tr>
          <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday June 22</th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
        </tr>
        <tr>
          <td className="pr-2">{f3}Sprint Race</td>
          <td className="pr-2">
            {[new Date("June 22, 2024 10:40:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 22, 2024 11:25:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">21L or 40&apos;+1L</td>
        </tr>
        <tr>
          <td className="pr-2">{f1}Practice 3</td>
          <td className="pr-2">
            {[new Date("June 22, 2024 12:30:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 22, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
        </tr>
        <tr>
          <td className="pr-2">{f2}Sprint Race</td>
          <td className="pr-2">
            {[new Date("June 22, 2024 14:15:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 22, 2024 15:05:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">26L or 45&apos;+1L</td>
        </tr>
        <tr>
          <td className="pr-2">{f1}Qualifying</td>
          <td className="pr-2">
            {[new Date("June 22, 2024 16:00:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 22, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">18&apos; + 15&apos; + 12&apos;</td>
          <td className="pr-2">{hm}{auvio}</td>
        </tr>
        <tr>
          <td className="pr-2">{fa}First Race</td>
          <td className="pr-2">
            {[new Date("June 22, 2024 18:00:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 22, 2024 18:35:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">16L or 30&apos;+1L</td>
        </tr>
        <tr>
          <td className="h-[2rem]"></td>
        </tr>
        <tr>
          <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday June 23</th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
          <th className="pr-2 text-left"></th>
        </tr>
        <tr>
          <td className="pr-2">{fa}Second Race</td>
          <td className="pr-2">
            {[new Date("June 23, 2024 08:50:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 23, 2024 09:25:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">16L or 30&apos;+1L</td>
        </tr>
        <tr>
          <td className="pr-2">{f3}Feature Race</td>
          <td className="pr-2">
            {[new Date("June 23, 2024 10:05:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 23, 2024 10:55:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">25L or 45&apos;+1L</td>
        </tr>
        <tr>
          <td className="pr-2">{f2}Feature Race</td>
          <td className="pr-2">
            {[new Date("June 23, 2024 11:35:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 23, 2024 12:40:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">37L or 1h+1L</td>
        </tr>
        <tr>
          <td className="pr-2">{f1}Race</td>
          <td className="pr-2">
            {[new Date("June 23, 2024 15:00:00 UTC+02:00").toLocaleString(undefined, {
              weekday: "long", hour: "2-digit", minute: "2-digit",
            }), "-", new Date("June 23, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, {
              hour: "2-digit", minute: "2-digit",
            })].join(" ")}
          </td>
          <td className="pr-2">66L or 2h+1L</td>
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
    <Paragraph title="Formula 2">
      <div className="h-max w-max m-auto">
        <a href="/formulaone/races/bahrain/f2-sprint.webp" target="_blank">
          <img src="/formulaone/races/spain/f2-sprint.webp" className="inline-block h-80 m-2" alt={"Formula 2 Sprint results."} />
        </a>
        <a href="/formulaone/races/spain/f2-feature.webp" target="_blank">
          <img src="/formulaone/races/spain/f2-feature.webp" className="inline-block h-80 m-2" alt={"Formula 2 Feature results."} />
        </a>
      </div>
    </Paragraph>
    <Paragraph title="Formula 3">
      <div className="h-max w-max m-auto">
        <a href="/formulaone/races/spain/f3-sprint.webp" target="_blank">
          <img src="/formulaone/races/spain/f3-sprint.webp" className="inline-block h-80 m-2" alt={"Formula 3 Sprint results."} />
        </a>
        <a href="/formulaone/races/spain/f3-feature.webp" target="_blank">
          <img src="/formulaone/races/spain/f3-feature.webp" className="inline-block h-80 m-2" alt={"Formula 3 Feature results."} />
        </a>
      </div>
    </Paragraph>
    <Paragraph title="F1 Academy">
      <div className="h-max w-max m-auto">
        <a href="/formulaone/races/spain/f1a-race1.webp" target="_blank">
          <img src="/formulaone/races/spain/f1a-race1.webp" className="inline-block h-80 m-2" alt={"F1 Academy Race 1 results."} />
        </a>
        <a href="/formulaone/races/spain/f1a-race2.webp" target="_blank">
          <img src="/formulaone/races/spain/f1a-race2.webp" className="inline-block h-80 m-2" alt={"F1 Academy Race 2 results."} />
        </a>
      </div>
    </Paragraph>
    <FooterBar />
  </>);
};

export default Page;