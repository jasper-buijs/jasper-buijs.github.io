/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/mobile/NavBar";
import Paragraph from "@/app/components/mobile/Paragraph";

const Page = () => {
  redirect("/formulaone/races/miami", true);
  const f1 = (
    <div className={ "inline-block w-10 relative h-[0.5rem]" }>
      <img className={ "inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" } src={ "/formulaone/f1web.webp" }
        alt={ "Formula 1" }/>
    </div>
  );
  const fa = (
    <div className={ "inline-block w-10 relative h-[0.5rem]" }>
      <img className={ "inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" } src={ "/formulaone/f1a.webp" }
        alt={ "Formula 3" }/>
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
      <div className={"h-[28vw] mb-4 bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3]"}>
        <div className={"h-full w-full relative"}>
          <img className={"absolute w-full h-auto top-1/2 translate-y-[-50%]"}
            src={"/formulaone/banners-dated/miami-header-dated.webp"} alt={""}
          />
        </div>
      </div>
      <Paragraph title="Weekend Graphics">
        <div className="h-full w-full m-auto overflow-x-auto whitespace-nowrap">
          <div className={"h-max w-max m-auto"}>
            <a href="/formulaone/races/miami/circuit.webp" target="_blank">
              <img src="/formulaone/races/miami/circuit.webp" className="inline-block h-48 m-2"
                alt="Miami International Autodrome. 3 DRS zones. 57 laps. 50% Safety Car chance. 1 minute 29.708 fastest historic race lap time."
              />
            </a>
            <a href="/formulaone/races/miami/sprint-starting-grid.webp" target="_blank">
              <img src="/formulaone/races/miami/sprint-starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Sprint Race Starting Grid. Max Verstappen starts on pole, Lerclerc in second and Perez third."}
              />
            </a>
            <a href="/formulaone/races/miami/sprint-race-result.webp" target="_blank">
              <img src="/formulaone/races/miami/sprint-race-result.webp" className="inline-block h-48 m-2"
                alt={"Race Results. Max Verstappen won, Leclerc came second and Perez third."}
              />
            </a>
            <a href="/formulaone/races/miami/starting-grid.webp" target="_blank">
              <img src="/formulaone/races/miami/starting-grid.webp" className="inline-block h-48 m-2"
                alt={"Starting Grid. Max Verstappen starts on pole, Leclerc in second and Sainz third."}
              />
            </a>
            <a href="/formulaone/races/miami/race-result.webp" target="_blank">
              <img src="/formulaone/races/miami/race-result.webp" className="inline-block h-48 m-2"
                alt={"Race Results. Lando Norris won, Verstappen came second and Leclerc third."}
              />
            </a>
          </div>
        </div>
      </Paragraph>
      <Paragraph title={"Schedule"}>
        <table className={"w-max m-auto table-auto"}>
          <tbody>
          <tr>
            <th className={"pr-2 text-left max-w-0 whitespace-nowrap"}>
              Friday May 3
            </th>
            <th className={"pr-2 text-left"} />
          </tr>
          {/* FA PRACTICE 1 */}
          <tr>
            <td className={"pr-2"}>
              {fa}P1
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 3, 2024 10:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 3, 2024 10:40:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join("")
              }
            </td>
          </tr>
          {/* F1 PRACTICE 1 */}
          <tr>
            <td className={"pr-2"}>
              {f1}FP1
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 3, 2024 12:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 3, 2024 13:30:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* FA PRACTICE 2 */}
          <tr>
            <td className={"pr-2"}>
              {fa}P2
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 3, 2024 15:20:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 3, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* SPRINT SHOOTOUT */}
          <tr>
            <td className={"pr-2"}>
              {f1}SQ
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 3, 2024 16:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 3, 2024 17:14:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className={"h-[1rem]"} />
          </tr>
          <tr>
            <th className={"pr-2 text-left max-w-0 whitespace-nowrap"}>
              Saturday May 4
            </th>
            <th className={"pr-2 text-left"} />
          </tr>
          {/* FA QUALIFYING */}
          <tr>
            <td className={"pr-2"}>
              {fa}Q
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 4, 2024 10:25:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 4, 2024 10:55:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* SPRINT */}
          <tr>
            <td className={"pr-2"}>
              {f1}S
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 4, 2024 12:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 4, 2024 12:30:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }{hm}{auvio}
            </td>
          </tr>
          {/* FA RACE 1 */}
          <tr>
            <td className={"pr-2"}>
              {fa}R1
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 4, 2024 14:05:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 4, 2024 14:40:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* F1 QUALIFYING */}
          <tr>
            <td className={"pr-2"}>
              {f1}Q
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 4, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 4, 2024 17:00:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }{hm}{auvio}
            </td>
          </tr>
          <tr>
            <td className={"h-[2rem]"} />
          </tr>
          <tr>
            <th className={"pr-2 text-left max-w-0 whitespace-nowrap"}>
              Sunday May 5
            </th>
            <th className={"pr-2 text-left"} />
          </tr>
          {/* FA RACE 2 */}
          <tr>
            <td className={"pr-2"}>
              {fa}R2
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 5, 2024 13:05:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 5, 2024 13:40:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* F1 RACE */}
          <tr>
            <td className={"pr-2"}>
              {f1}R
            </td>
            <td className={"pr-2"}>
              {
                [
                  new Date("May 5, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "narrow", hour: "numeric", minute: "numeric" }),
                  "-",
                  new Date("May 5, 2024 18:00:00 UTC-04:00")
                    .toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
                ].join(" ")
              }{hm}{auvio}
            </td>
          </tr>
          </tbody>
        </table>
        <p className={"text-center font-normal text-sm italic mt-4 mb-2"}>
          {
            [
              "Times displayed in ",
              new Date()
                .toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "shortGeneric" })
                .slice(4)
            ].join(" ")
          }
        </p>
      </Paragraph>
      <Paragraph title="F1 Academy">
        <div className="h-max w-full m-auto">
          <a href="/formulaone/races/miami/f1a-race1.webp" target="_blank">
            <img src="/formulaone/races/miami/f1a-race1.webp" className="block w-full my-2"
              alt={"F1 Academy Race 1 results."}
            />
          </a>
          <a href="/formulaone/races/miami/f1a-race2.webp" target="_blank">
            <img src="/formulaone/races/miami/f1a-race2.webp" className="block w-full my-2"
              alt={"F1 Academy Race 2 results."}
            />
          </a>
        </div>
      </Paragraph>
    </div>
  </>);
}

export default Page;