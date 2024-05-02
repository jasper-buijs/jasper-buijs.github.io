/* eslint-disable @next/next/no-img-element */
"use client";

import redirect from "@/app/components/redirect";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import FooterBar from "@/app/components/FooterBar";

const Page = () => {
  redirect("/formulaone", false);

  const f1 = (
    <div className={ "inline-block w-10 relative h-[0.5rem]" }>
      <img className={ "inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" } src={ "/formulaone/f1web.webp" }
           alt={ "Formula 1" }/>
    </div>
  );
  const sprint = (
    <div className={ "inline-block w-20 relative h-[0.5rem]" }>
      <img className={ "inline-block dark:hidden h-[0.5rem] absolute left-1/2 translate-x-[-50%]" }
           src={ "/formulaone/f1-sprint-text-black.webp" } alt={ "F1 Sprint" }/>
      <img className={ "dark:inline-block hidden h-[0.5rem] absolute left-1/2 translate-x-[-50%]" }
           src={ "/formulaone/f1-sprint-text-white.webp" } alt={ "F1 Sprint" }/>
    </div>
  );
  const fa = (
    <div className={ "inline-block w-10 relative h-[0.5rem]" }>
      <img className={ "inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" } src={ "/formulaone/f1a.webp" }
           alt={ "Formula 3" }/>
    </div>
  );
  const hm = (
    <div className={ "inline-block w-5 relative h-[1rem]" }>
      <img className={ "inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" }
           src={ "/formulaone/heiligemaagden128x128.webp" } alt={ "Streamed on heiligemaagden.com." }/>
    </div>
  );
  const auvio = (
    <div className={ "inline-block w-5 relative h-[1rem]" }>
      <img className={ "inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" }
           src={ "/formulaone/auvio_192x192.webp" } alt={ "Streamed on RTBF Auvio." }/>
    </div>
  );

  return (
    <>
      <NavBar activePage={ "formulaone" }/>
      <div className={ "h-[28vw] mx-12 bg-gradient-to-r from-[#03ABAC] to-[#F5BFB3]" }>
        <div className={ "h-full w-full relative" }>
          <img className={ "absolute w-full h-auto top-1/2 translate-y-[-50%]" }
               src={ "/formulaone/banners-dated/miami-header-dated.webp" } alt={ "" }/>
        </div>
      </div>
      <Paragraph title={ "Schedule" }>
        <table className={ "w-max m-auto table-auto" }>
          <tbody>
          <tr>
            <th className={ "pr-2 text-left max-w-0 whitespace-nowrap" }>
              Friday May 3
            </th>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
          </tr>
          {/* FA PRACTICE 1 */ }
          <tr>
            <td className={ "pr-2" }>
              { fa }Practice 1
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 3, 2024 10:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 3, 2024 10:40:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join("")
              }
            </td>
          </tr>
          {/* F1 PRACTICE 1 */ }
          <tr>
            <td className={ "pr-2" }>
              { f1 }Practice 1
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 3, 2024 12:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 3, 2024 13:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* FA PRACTICE 2 */ }
          <tr>
            <td className={ "pr-2" }>
              { fa }Practice 2
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 3, 2024 15:20:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 3, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* SPRINT SHOOTOUT */ }
          <tr>
            <td className={ "pr-2" }>
              { sprint } Qualifying
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 3, 2024 16:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 3, 2024 17:14:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              12&apos; + 10&apos; + 8&apos;
            </td>
            <td>
              {hm}{ auvio }
            </td>
          </tr>
          <tr>
            <td className={ "h-[2rem]" }/>
          </tr>
          <tr>
            <th className={ "pr-2 text-left max-w-0 whitespace-nowrap" }>
              Saturday May 4
            </th>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
          </tr>
          {/* FA QUALIFYING */ }
          <tr>
            <td className={ "pr-2" }>
              { fa }Qualifying
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 4, 2024 10:25:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 4, 2024 10:55:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
          </tr>
          {/* SPRINT */ }
          <tr>
            <td className={ "pr-2" }>
              { sprint }
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 4, 2024 12:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 4, 2024 12:30:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              19L or 1h+1L
            </td>
            <td>
              {hm}{ auvio }
            </td>
          </tr>
          {/* FA RACE 1 */ }
          <tr>
            <td className={ "pr-2" }>
              { fa }First Race
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 4, 2024 14:05:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 4, 2024 14:40:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              13L or 30&apos;+1L
            </td>
          </tr>
          {/* F1 QUALIFYING */ }
          <tr>
            <td className={ "pr-2" }>
              { f1 }Qualifying
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 4, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 4, 2024 17:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              18&apos; + 15&apos; + 12&apos;
            </td>
            <td className={ "pr-2" }>
              {hm}{ auvio }
            </td>
          </tr>
          <tr>
            <td className={ "h-[2rem]" }/>
          </tr>
          <tr>
            <th className={ "pr-2 text-left max-w-0 whitespace-nowrap" }>
              Sunday May 5
            </th>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
            <th className={ "pr-2 text-left" }/>
          </tr>
          {/* FA RACE 2 */ }
          <tr>
            <td className={ "pr-2" }>
              { fa }Second Race
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 5, 2024 13:05:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 5, 2024 13:40:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              30L or 30&apos;+1L
            </td>
          </tr>
          {/* F1 RACE */ }
          <tr>
            <td className={ "pr-2" }>
              { f1 }Race
            </td>
            <td className={ "pr-2" }>
              {
                [
                  new Date("May 5, 2024 16:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }),
                  "-",
                  new Date("May 5, 2024 18:00:00 UTC-04:00")
                    .toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" })
                ].join(" ")
              }
            </td>
            <td className={ "pr-2" }>
              57L or 2h+1L
            </td>
            <td className={ "pr-2" }>
              {hm}{ auvio }
            </td>
          </tr>
          </tbody>
        </table>
        <p className={ "text-center font-normal text-sm italic mt-4 mb-2" }>
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
      <FooterBar/>
    </>
  );
}

export default Page;