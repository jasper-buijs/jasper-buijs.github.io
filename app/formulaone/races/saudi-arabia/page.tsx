/* eslint-disable @next/next/no-img-element */
"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone", false);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.png" alt={"Formula 1"} />
    </div>
  );
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.png" alt={"Formula 2"} />
    </div>
  );
  const fa = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f1a.png" alt={"Formula 3"} />
    </div>
  );
  const hm = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/heiligemaagden128x128.png" alt={"Streamed on heiligemaagden.com."} />
    </div>
  );
  const auvio = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/auvio_192x192.png" alt={"Streamed on RTBF Auvio."} />
    </div>
  );
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="h-[28vw] mx-12 bg-gradient-to-r from-[#016C36] to-[#66C698]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]" src="/formulaone/banners-dated/saudi-header-dated.png" alt={""} />
        </div>
      </div>
      <Paragraph title="BREAKING: Sainz out with appendicitis, Ollie Bearman to take over">Ferrari driver Carlos Sainz has been diagnosed with appendicitis and requires immediate surgery, meaning he will be out of the car for the remainder of the Saudi Arabian GP weekend. Formula 2 pole-sitter Ollie Bearman, driving for Prema in the Ferrari driver academy, will take over for the remainder of the weekend. He will therefore forfeit his Formula 2 weekend and pole position. He will be in the car as of Practice 3 later today. Sainz already missed the second half of media day on Wednesday because he felt ill. He was back in the car for the first two Practice session, presumably on pain medication, but has now been transferred to hospital.</Paragraph>
      <Paragraph title="Weekend Graphics">
        <div className="h-max w-max m-auto">
          <a href="/formulaone/races/saudi-arabia/circuit.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/circuit.png" className="inline-block h-96 m-2" alt={"Jeddah Corniche Circuit. 50 laps. 99% Safety Car chance. 1 minute 30.734 fastest historical lap time."} />
          </a>
          <a href="/formulaone/races/saudi-arabia/starting-grid.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/starting-grid.png" className="inline-block h-96 m-2" alt={"Starting Grid. Max Verstappen starts on pole, Leclerc in second and Russell Perez."} />
          </a>
          <a href="/formulaone/races/saudi-arabia/race-result.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/race-result.png" className="inline-block h-96 m-2" alt={"Race Results. Max Verstappen won, Perez came second and Sainz third."} />
          </a>
        </div>
      </Paragraph>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Thursday March 7</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f2}Practice</td>
              <td className="pr-2">{[new Date("March 7, 2024 12:55:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 13:40:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{fa}Practice</td>
              <td className="pr-2">{[new Date("March 7, 2024 14:05:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 14:45:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 1</td>
              <td className="pr-2">{[new Date("March 7, 2024 16:30:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Qualifying</td>
              <td className="pr-2">{[new Date("March 7, 2024 18:00:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 18:30:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 2</td>
              <td className="pr-2">{[new Date("March 7, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 21:00:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{fa}Qualifying</td>
              <td className="pr-2">{[new Date("March 7, 2024 21:30:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 7, 2024 22:00:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday March 8</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{fa}First Race</td>
              <td className="pr-2">{[new Date("March 8, 2024 15:10:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 8, 2024 15:45:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">13L or 30&apos;+1L</td>
              <td className="pr-2">{hm}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 3</td>
              <td className="pr-2">{[new Date("March 8, 2024 16:30:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 8, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Sprint Race</td>
              <td className="pr-2">{[new Date("March 8, 2024 18:10:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 8, 2024 19:00:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">20L or 45&apos;+1L</td>
              <td className="pr-2">{hm}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Qualifying</td>
              <td className="pr-2">{[new Date("March 8, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 8, 2024 21:00:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">18&apos; + 15&apos; + 12&apos;</td>
              <td className="pr-2">
                {hm}
                {auvio}
              </td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday March 9</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{fa}Second Race</td>
              <td className="pr-2">{[new Date("March 9, 2024 15:05:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 9, 2024 15:40:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">13L or 30&apos;+1L</td>
              <td className="pr-2">{hm}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Feature Race</td>
              <td className="pr-2">{[new Date("March 9, 2024 16:25:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 9, 2024 17:30:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">28L or 1h+1L</td>
              <td className="pr-2">{hm}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Race</td>
              <td className="pr-2">{[new Date("March 9, 2024 20:00:00 UTC+03:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 9, 2024 22:00:00 UTC+03:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">50L or 2h+1L</td>
              <td className="pr-2">
                {hm}
                {auvio}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2">{["Times displayed in ", new Date().toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "shortGeneric" }).slice(4)].join(" ")}</p>
      </Paragraph>
      <Paragraph title="Penalties">
        <div className="h-max w-max m-auto">
          <div className="font-semibold">Race Penalties:</div>
          <ul className="list-disc">
            <li>
              <a className="text-blue-700 underline" href="https://www.fia.com/sites/default/files/decision-document/2024%20Saudi%20Arabian%20Grand%20Prix%20-%20Infringement%20-%20Car%2022%20-%20Unsafe%20release.pdf">
                Tsunoda - 5 seconds (post-race) - Unsafe Release (Reconnaissance Laps)
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.fia.com/sites/default/files/decision-document/2024%20Saudi%20Arabian%20Grand%20Prix%20-%20Infringement%20-%20Car%2011%20-%20Unsafe%20release.pdf">
                Perez - 5 seconds and 1 penalty point (in-race) - Unsafe Release
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.fia.com/sites/default/files/decision-document/2024%20Saudi%20Arabian%20Grand%20Prix%20-%20Infringement%20-%20Car%2020%20-%20Leaving%20the%20track%20and%20gaining%20an%20advantage.pdf">
                Magnussen - 10 seconds (in-race) - Leaving the Track (overtake)
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.fia.com/sites/default/files/decision-document/2024%20Saudi%20Arabian%20Grand%20Prix%20-%20Infringement%20-%20Car%2020%20-%20Causing%20a%20Collision.pdf">
                Magnussen - 10 seconds and 3 penalty points (in-race) - Causing a Collision
              </a>
            </li>
            <li>
              <a className="text-blue-700 underline" href="https://www.fia.com/sites/default/files/decision-document/2024%20Saudi%20Arabian%20Grand%20Prix%20-%20Decision%20-%20Car%204%20-%20Alleged%20false%20start.pdf">
                Norris - No Further Action (in-race) - Alleged False Start
              </a>
            </li>
          </ul>
        </div>
      </Paragraph>
      <Paragraph title="Formula 2">
        <div className="h-max w-max m-auto">
          <a href="/formulaone/races/saudi-arabia/f2-sprint.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f2-sprint.png" className="inline-block h-96 m-2" alt={"Formula 2 Sprint results."} />
          </a>
          <a href="/formulaone/races/saudi-arabia/f2-feature.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f2-feature.png" className="inline-block h-96 m-2" alt={"Formula 2 Feature results."} />
          </a>
        </div>
        <p className="text-center font-normal text-sm italic mt-4 mb-2">Note: Richard Verschoor (Trident, P1) and Roman Stanek (Trident, P10) where disqualified from the Sprint Race for breaches of the Technical Regulations.</p>
      </Paragraph>
      <Paragraph title="F1 Academy">
        <div className="h-max w-max m-auto">
          <a href="/formulaone/races/saudi-arabia/f1a-race1.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f1a-race1.png" className="inline-block h-80 m-2" alt={"Formula 3 Sprint results."} />
          </a>
          <a href="/formulaone/races/saudi-arabia/f1a-race2.png" target="_blank">
            <img src="/formulaone/races/saudi-arabia/f1a-race2.png" className="inline-block h-80 m-2" alt={"Formula 3 Feature results."} />
          </a>
        </div>
        <p className="text-center font-normal text-sm italic mt-4 mb-2">Note: Doriane Pin (Mercedes by Prema, P1) received a 20 second post-race penalty in Race 2 for taking the chequered flag twice.</p>
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;
